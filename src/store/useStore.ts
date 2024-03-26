import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { getProducts, getProductById } from '@/services/product'
import type { Product } from '@/types'

export interface State {
  products: Product[]
  product?: Product
  cartItems: Product[]
  cartTotal: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: [],
    product: undefined,
    cartItems: [],
    cartTotal: 0
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    addCartItem(state, product) {
      if (state.cartItems.some((item) => item.id === product.id)) {
        return
      }
      state.cartItems.push(product)
      state.cartTotal += 1
    },
    removeCartItem(state, product) {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== product.id
      })
      state.cartTotal -= 1
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
    },
    addCartItem({ commit }, product) {
      commit('addCartItem', product)
    },
    removeCartItem({ commit }, product) {
      commit('removeCartItem', product)
    }
  }
})
