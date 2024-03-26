<script setup>
import { AppProductDetail, AppBackButton } from '@/components/common'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const { params } = useRoute()

const fetchProduct = async () => {
  store.dispatch('fetchProduct', params.id)
}

onMounted(() => {
  fetchProduct()
})

onUnmounted(() => {
  store.commit('clearProduct')
})
</script>

<template>
  <div class="py-10">
    <AppBackButton />
    <AppProductDetail />
  </div>
</template>
