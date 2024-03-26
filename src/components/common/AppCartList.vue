<script setup>
import { AppCard, AppImage } from '@/components/ui'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Trash2Icon } from 'lucide-vue-next'
import { useStore } from 'vuex'

const store = useStore()
const { params } = useRoute()

const fetchProduct = async () => {
  store.dispatch('fetchProduct', params.id)
}

const removeCartItem = (product) => {
  store.dispatch('removeCartItem', product)
}

onMounted(() => {
  fetchProduct()
})

onUnmounted(() => {
  store.commit('clearProduct')
})
</script>

<template>
  <div class="flex-1 flex flex-col w-full gap-4">
    <AppCard
      class="flex justify-between p-4"
      v-for="product in store.state.cartItems"
      :key="product.id"
    >
      <div class="flex gap-10">
        <div class="w-20 h-20 overflow-hidden">
          <AppImage :src="product.image" class="object-contain h-20 mx-auto" />
        </div>
        <div class="flex-1">
          <div class="text-sm">{{ product.category }}</div>
          <div class="text-lg font-medium mb-3">{{ product.title }}</div>

          <div
            class="inline-flex items-center gap-1 text-sm hover:underline cursor-pointer text-red-600"
            @click="removeCartItem(product)"
          >
            <Trash2Icon width="15" height="15" />
            Excluir
          </div>
        </div>
      </div>
      <div class="w-[150px]">
        <span class="text-sm">Preço:</span>
        <div class="text-xl font-semibold text-primary">R$ {{ product.price }}</div>
      </div>
    </AppCard>
  </div>
</template>
