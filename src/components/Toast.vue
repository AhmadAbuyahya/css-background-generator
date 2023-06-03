<script setup lang="ts">
import type { Toast } from '~/types'
import { useToastStore } from '~/stores/toast'

const { toast } = defineProps<{ toast: Toast }>()
const { clearToast } = useToastStore()

onMounted(() => {
  setTimeout(() => {
    clearToast(toast.id)
  }, 3000)
})

function resolveIcon() {
  switch (toast.variant) {
    case 'success':
      return 'i-carbon-checkmark-outline'
    case 'info':
      return 'i-carbon-information-outline'
    case 'error':
      return 'i-carbon-close-outline'
    default:
      return ''
  }
}
</script>

<template>
  <div
    class="toast mb-4 min-h-50px w-300px flex items-center justify-start rounded p-4"
    :class="toast.variant"
  >
    <div class="flex items-center gap-1">
      <div :class="resolveIcon()" />
      <h3>{{ toast.title }}</h3>
    </div>
    <div ml-auto h-full flex items-center border-l-1 border-l-gray pl-2>
      <button class="i-carbon-close-outline" @click="clearToast(toast.id)" />
    </div>
  </div>
</template>

<style lang="css">
:root {
  --green: #007e50;
  --red: #990000;
  --blue: #009999;
}

.success, .info, .error {
  color: var(--white);
}

.success {
  background-color: var(--green);
}

.info {
  background-color: var(--blue);
}

.error {
  background-color: var(--red);
}
</style>
