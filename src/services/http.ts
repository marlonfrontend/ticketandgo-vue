import axios, { type AxiosResponse } from 'axios'

const axiosCreate = {
  baseURL: import.meta.env.VITE_BACKEND_URL,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export const http = axios.create(axiosCreate)

http.interceptors.response.use((response: AxiosResponse) => response.data)

http.interceptors.request.use((request) => {
  const headers = request.headers ?? {}

  request.headers = headers
  return request
})
