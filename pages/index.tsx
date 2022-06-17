import { useAddToast } from 'hooks/useSetToast'
import type { NextPage } from 'next'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const addToast = useAddToast()

  useEffect(() => {
    addToast({ type: 'success', title: 'Success', description: 'Message sent!' })
    setTimeout(
      () => addToast({ type: 'error', title: "Can't send message", description: 'Please check your internet' }),
      3000
    )
    setTimeout(
      () =>
        addToast({
          title: 'Archived',
          description: "I'm normal one ",
          onClose: () => console.log('I am nothing'),
        }),
      6000
    )
  }, [addToast])

  return (
    <main>
      <h1
        style={{
          margin: '6rem auto',
          textAlign: 'center',
        }}
      >
        Next.js Boilerplate V1
      </h1>
    </main>
  )
}

export default Home
