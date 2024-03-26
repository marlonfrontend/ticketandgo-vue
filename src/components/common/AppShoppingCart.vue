<script setup>
import { ShoppingBag } from 'lucide-vue-next'
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <RouterLink to="/cart" class="text-white relative">
    <ShoppingBag :stroke-width="1.5" />
    <div
      class="-top-2 -right-2 absolute flex items-center justify-center bg-secondary rounded-full h-4 w-4 text-xs text-black"
      v-if="store.state.cartTotal"
    >
      {{ store.state.cartTotal }}
    </div>
  </RouterLink>
</template>
