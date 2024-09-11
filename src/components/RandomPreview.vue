<script setup lang="ts">
import { useActiveTemplateStore } from '~/stores/activeTemplate'

defineEmits(['setBgStyles'])
const { getRandomTemplateCss } = useActiveTemplateStore()
const { addToast } = useToastStore()
const randomCss = getRandomTemplateCss()

function copyStyle() {
  navigator.clipboard.writeText(randomCss)
  addToast({
    variant: 'success',
    title: 'Copied CSS to clipboard',
    id: Date.now(),
  })
}
</script>

<template>
  <div class="preview relative flex items-center justify-center" :style="randomCss">
    <button
      class="hidden gap-4 border-2 rounded bg-[#343434] p-2 text-white transition-colors duration-200 ease-in-out"
      @click="() => {
        copyStyle()
        $emit('setBgStyles', randomCss)
      }"
    >
      <div class="i-carbon-copy" />
      Copy CSS
    </button>
  </div>
</template>

<style lang="css" scoped>
.preview:hover button {
  display: flex;

}
</style>
