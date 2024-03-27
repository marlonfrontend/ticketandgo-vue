<script setup>
import { AppCard, AppImage, AppButton } from '@/components/ui'
import { useRouter } from 'vue-router'

defineProps({
  id: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  thumb: {
    type: String
  },
  price: {
    type: [String, Number]
  },
  description: {
    type: String
  }
})

const router = useRouter()
</script>

<template>
  <AppCard class="post-card">
    <RouterLink class="h-[300px] block overflow-hidden" :to="`/product/${id}`">
      <AppImage :src="thumb" :alt="title" class="object-contain h-full mx-auto p-10" />
    </RouterLink>

    <div class="p-4">
      <RouterLink class="min-h-12 line-clamp-2" :to="`/product/${id}`">
        {{ title }}
      </RouterLink>
      <div class="my-2">
        <span>R$</span> <span class="font-semibold text-xl">{{ price }}</span>
      </div>
      <AppButton block @click="router.push(`/product/${id}`)">Comprar</AppButton>
    </div>
  </AppCard>
</template>
