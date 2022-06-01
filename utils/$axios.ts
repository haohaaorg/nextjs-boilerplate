import axios from 'axios'
import logout from './logout'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

instance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    //! Client-side logics here
    const token = localStorage.getItem('token')
    config.headers = { ...config.headers, ['Authorization']: `Bearer ${token}` }
  } else {
    //! Serve-side logics here
  }
  return config
})

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err = {}) => {
    //Handle things like logout
    if (err?.response?.status === 401) {
      logout()
    }
    return Promise.reject(err)
  }
)

export default instance
