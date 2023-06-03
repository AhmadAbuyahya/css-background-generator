<script setup lang="ts">
import { useToastStore } from '~/stores/toast'

const { toasts } = useToastStore()
</script>

<template>
  <div
    class="toasts-wrapper"
  >
    <TransitionGroup name="list">
      <Toast
        v-for="(toast, index) of toasts"
        :key="index"
        :toast="toast"
      />
    </TransitionGroup>
  </div>
</template>

<style lang="css" scoped>
.toasts-wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
