<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
// const user = useUserStore()
const links = [
  {
    label: 'Triangles',
    href: '/triangles',
  },
  {
    label: 'Checkers',
    href: '/checkers',
  },
]
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center bg-teal-700">
    <div v-for="link in links" :key="link.label">
      <RouterLink :to="link.href">
        {{ link.label }}
      </RouterLink>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
