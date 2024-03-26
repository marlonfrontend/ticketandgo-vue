<script setup>
defineProps({
  width: {
    type: String,
    default: () => '100%'
  }
})
</script>

<template>
  <div class="rounded-md border" :style="`width: ${width}`">
    <slot />
  </div>
</template>
