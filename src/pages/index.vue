<script setup lang="ts">
import templates from '~/lib/templates'

defineOptions({
  name: 'IndexPage',
})
// const user = useUserStore()
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center bg-teal-700">
    <div v-for="(value, key) in templates" :key="key">
      <BgPreview :template="value.template" :variables="value.variables" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
