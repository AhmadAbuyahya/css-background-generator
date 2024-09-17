<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useActiveTemplateStore } from '~/stores/activeTemplate'
import { useToastStore } from '~/stores/toast'

const activeTemplateStore = useActiveTemplateStore()
const { css } = storeToRefs(activeTemplateStore)
const { addToast } = useToastStore()

function copyStyle() {
  navigator.clipboard.writeText(css.value)
  addToast({
    variant: 'success',
    title: 'Copied CSS to clipboard',
    id: Date.now(),
  })
}
</script>

<template>
  <div class="relative h-50vh md:h-unset">
    <div
      class="overflow-hidden md:h-screen"
      :style="{
        ...activeTemplateStore.style,
        filter: 'blur(5px) brightness(0.5)',
        inset: 0,
        position: 'absolute',
      }"
    />
    <div
      class="absolute inset-15px my-auto h-auto flex items-center justify-center gap-4 border-1 rounded-lg bg-[#171717] bg-opacity-90 p-4 md:inset-8%"
      :style="{
        ...activeTemplateStore.style,
      }"
    >
      <button
        class="button"
        @click="copyStyle"
      >
        <div class="i-carbon-copy" />
        Copy CSS
      </button>
    </div>
  </div>
</template>
