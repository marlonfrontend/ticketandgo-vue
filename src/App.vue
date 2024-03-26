<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AppHeader, AppFooter } from '@/components/layout'
import { AppContainer } from '@/components/ui'
</script>

<template>
  <AppHeader />
  <AppContainer>
    <RouterView />
  </AppContainer>
  <AppFooter />
</template>
