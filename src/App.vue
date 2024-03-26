<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AppHeader, AppFooter } from '@/components/layout'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
