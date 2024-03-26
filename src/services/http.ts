import axios, { type AxiosResponse } from 'axios'

const axiosCreate = {
  baseURL: 'https://fakestoreapi.com',

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
