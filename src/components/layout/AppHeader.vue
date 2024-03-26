<script setup>
import { AppBrand, AppContainer } from '@/components/ui'
import { AppShoppingCart } from '@/components/common'
</script>

<template>
  <header class="app-header bg-primary py-4">
    <AppContainer>
      <div class="flex justify-between items-center">
        <AppBrand />
        <AppShoppingCart />
      </div>
    </AppContainer>
  </header>
</template>
