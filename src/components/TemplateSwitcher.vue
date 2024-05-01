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
  <div class="h-screen flex flex-col justify-between bg-black bg-opacity-90 p-8">
    <button v-for="(_, key) in templates" :key="key" class="border-1 rounded bg-red px-4 py-8 capitalize transition-all hover:scale-105" :style="getStyle(String(key))" @click="() => updateActiveTemplate(String(key))">
      <div class="border-1 rounded bg-black p-1">
        {{ key }}
      </div>
    </button>
  </div>
</template>
