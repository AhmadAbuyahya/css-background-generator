<script setup lang="ts">
import { inject } from '@vercel/analytics'

inject()
</script>

<template>
  <main
    text="center gray-700 dark:gray-200"
  >
    <!-- px-4 py-10 -->
    <RouterView />
    <!-- <Footer /> -->
  </main>
</template>
