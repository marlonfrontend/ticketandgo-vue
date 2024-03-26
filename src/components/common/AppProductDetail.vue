<script setup>
import { AppButton } from '@/components/ui'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const addCartItem = (product) => {
  store.dispatch('addCartItem', product)
}

const createOrder = (product) => {
  store.dispatch('addCartItem', product)
  router.push('/cart')
}
</script>

<template>
  <div class="flex gap-5">
    <div class="w-1/2">
      <div class="w-[100%] h-[450px] p-10 border">
        <img
          :src="store.state.product.image"
          :alt="store.state.product.title"
          v-if="store.state.product"
          class="object-contain h-full mx-auto"
        />
      </div>
    </div>
    <div class="w-1/2">
      <h3 class="text-3xl font-semibold" v-if="!!store.state.product">
        {{ store.state.product.title }}
      </h3>
      <span class="text-sm"
        >Categoria: {{ store.state.product?.category ?? 'Não encontrado' }}</span
      >
      <div class="text-2xl font-medium my-5">R$ {{ store.state.product?.price }}</div>
      <div class="flex flex-col items-start gap-2">
        <AppButton @click="addCartItem(store.state.product)">Adicionar ao carrinho</AppButton>
        <AppButton @click="createOrder(store.state.product)">Finalizar compra</AppButton>
      </div>
    </div>
  </div>

  <div class="my-10">
    <div class="text-xl font-medium mb-5">Descrição</div>
    <p v-if="store.state.product" class="text-sm">
      {{ store.state.product.description }}
    </p>
  </div>
</template>
