<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="main-container min-h-screen md:grid md:h-screen">
    <TemplateSwitcher />
    <BgPreview />
    <Controls />
  </div>
  <Toasts />
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
.main-container {
  grid-template-columns: 12rem minmax(0, 1fr) 20rem;
}

@media (max-width: 768px) {
  .main-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
