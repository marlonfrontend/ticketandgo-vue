<script setup>
defineProps({
  block: {
    type: String,
    default: () => '100%'
  }
})
</script>

<template>
  <button class="text-sm uppercase bg-secondary rounded-md py-2 px-8 w-full">
    <slot />
  </button>
</template>
