<script setup>
import { ref, onMounted } from 'vue'

const container = ref(null)

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const { default: Viewer } = await import('v-viewer')
    await import('viewerjs/dist/viewer.css')
    
    new Viewer(container.value, {
      inline: false,
      toolbar: true
    })
  }
})
</script>

<template>
  <div ref="container">
    <slot />
  </div>
</template>