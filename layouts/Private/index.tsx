import axios from 'axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

type PrivateProps = { redirect?: string; children: Function }

const Private = ({ redirect = 'login', children }: PrivateProps) => {
  const router = useRouter()
  const token = localStorage.getItem('token')
  const { status } = useQuery('auth', () => axios(`/auth/${token}`))

  useEffect(() => {
    if (!token || status === 'error') {
      router.replace(redirect)
    }
  }, [token, router, redirect, status])

  return status === 'success' ? (
    children({ token })
  ) : status === 'loading' ? (
    <div>Loading</div>
  ) : (
    <div>Unkown Error</div>
  )
}

export default Private
