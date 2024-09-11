<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const bgStyles = ref(';')
</script>

<template>
  <div
    class="grid grid-cols-2 gap-20 p-10 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6"
    :style="bgStyles"
  >
    <RandomPreview
      v-for="i in 1000"
      :key="i"
      class="aspect-ratio-1 border-1 rounded-lg"
      @set-bg-styles="val => (bgStyles = val)"
    />
    <Toasts />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
</style>
