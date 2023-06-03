<script setup lang="ts">
import templates from '~/lib/templates'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="max-h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-teal-700">
    <BgPreview v-for="(value, key) in templates" :key="key" :template="value.template" :variables="value.variables" />
    <Toasts />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
