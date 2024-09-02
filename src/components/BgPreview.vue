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
  <div class="relative">
    <div
      h-screen
      overflow-hidden
      :style="{
        ...activeTemplateStore.style,
        filter: 'blur(5px) brightness(0.5)',
        inset: 0,
        position: 'absolute',
      }"
    />
    <div
      class="absolute inset-8% my-auto h-auto flex items-center justify-center border-1 rounded-lg bg-[#171717] bg-opacity-90 p-4"
      :style="{
        ...activeTemplateStore.style,
      }"
    >
      <button
        class="flex gap-4 border-2 rounded bg-[#343434] p-2 text-white transition-colors duration-200 ease-in-out"
        @click="copyStyle"
      >
        <div class="i-carbon-copy" />
        Copy CSS
      </button>
    </div>
  </div>
</template>
