import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { getProducts, getProductById } from '@/services/product'
import type { Product } from '@/types'

export interface State {
  products: Product[]
  product?: Product
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: [],
    product: undefined
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    clearProduct(state) {
      state.product = undefined
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const products = await getProducts()
        commit('setProducts', products)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchProduct({ commit }, id) {
      try {
        const post = await getProductById(id)
        commit('setProduct', post)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
