<script setup>
import img from '@/assets/img/no-image.jpg'
defineProps({
  src: {
    type: String
  },
  alt: {
    type: String
  }
})

const errorImage = (e) => {
  e.target.src = img
}
</script>

<template>
  <img :src="src" v-lazy="{ src: src }" :alt="alt" @error="errorImage" />
</template>
