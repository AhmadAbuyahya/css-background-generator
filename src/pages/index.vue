<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="max-h-screen flex flex-row snap-y snap-mandatory overflow-y-hidden bg-teal-700">
    <div class="absolute left-0 top-0 z-10 h-full">
      <TemplateSwitcher />
    </div>
    <BgPreview />
  </div>
  <Toasts />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
