import { http } from './http'
import type { Product } from '@/types'

export const getProducts = () => {
  return http.get('/products')
}

export const getProductById = (id: string): Promise<Product> => {
  return http.get(`/products/${id}`)
}
