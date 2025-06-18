<template>
  <div v-viewer="options" class="image-viewer">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageViewer',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style scoped>
.image-viewer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}
</style>