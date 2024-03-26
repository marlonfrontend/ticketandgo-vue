<script setup>
import { ChevronLeftCircle } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="mb-3">
    <div
      @click="router.back()"
      class="mb-5 inline-flex gap-1 items-center hover:underline cursor-pointer hover:text-primary"
    >
      <ChevronLeftCircle width="18" height="18" :stroke-width="1.6" />
      Voltar
    </div>
  </div>
</template>
