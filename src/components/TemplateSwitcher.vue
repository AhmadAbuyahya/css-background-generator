<script setup lang="ts">
import templates from '~/lib/templates'
import { useActiveTemplateStore } from '~/stores/activeTemplate'

const { updateActiveTemplate } = useActiveTemplateStore()

function getStyle(slug: string) {
  const style: { [x: string]: string } = {}
  Object.entries(templates[slug].template).forEach(([key, value]) => {
    const regex = /{(\w+)}/g
    const matches = value.matchAll(regex)
    let newValue = value
    for (const match of matches) {
      const finalValue = match[0].toLowerCase().includes('size') ? parseInt(String(templates[slug].variables[match[1]].value)) / 2 : templates[slug].variables[match[1]].value
      newValue = newValue.replace(match[0], finalValue as string)
    }

    style[key] = newValue
  })
  return style
}
</script>

<template>
  <div class="h-fit-content absolute bottom-0 left-0 z-10 w-full flex flex-row flex-nowrap justify-between gap-10 overflow-x-auto bg-black bg-opacity-90 p-3 md:bottom-unset md:top-0 md:h-screen md:w-auto md:flex-col md:p-8">
    <button v-for="(_, key) in templates" :key="key" :title="String(key)" class="min-w-40 border-1 rounded bg-red px-4 py-8 capitalize transition-all hover:scale-105" :style="getStyle(String(key))" @click="() => updateActiveTemplate(String(key))" />
  </div>
</template>
