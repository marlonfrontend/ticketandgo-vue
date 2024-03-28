<script setup lang="ts">
import { AppProductCard } from '@/components/common'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const fetchProducts = () => {
  store.dispatch('fetchProducts')
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="grid md:grid-cols-4 grid-cols-1 gap-4 my-10">
    <AppProductCard
      v-for="product in store.state.products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :thumb="product.image"
      :price="product.price"
    />
  </div>
</template>
