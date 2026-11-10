import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_BASE_API || 'http://127.0.0.1:8000/api/v1'
const axiosInstance = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' } })
const refreshClient = axios.create({ baseURL })

axiosInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) config.headers.set('Authorization', `Bearer ${accessToken}`)
  return config
})

let refreshPromise = null
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const request = error.config
    const status = error.response?.status
    const isAuthEndpoint = request?.url?.includes('/token/') || request?.url?.includes('/register/')
    if (status !== 401 || !request || request._retry || isAuthEndpoint) return Promise.reject(error)
    const refresh = localStorage.getItem('refreshToken')
    if (!refresh) return Promise.reject(error)
    request._retry = true
    try {
      if (!refreshPromise) {
        refreshPromise = refreshClient.post('/token/refresh/', { refresh })
          .finally(() => { refreshPromise = null })
      }
      const response = await refreshPromise
      localStorage.setItem('accessToken', response.data.access)
      request.headers.set('Authorization', `Bearer ${response.data.access}`)
      return axiosInstance(request)
    } catch (refreshError) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      window.dispatchEvent(new Event('auth:expired'))
      return Promise.reject(refreshError)
    }
  }
)
export default axiosInstance
