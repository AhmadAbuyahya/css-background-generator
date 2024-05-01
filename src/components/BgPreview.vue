<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useActiveTemplateStore } from '~/stores/activeTemplate'
import { useToastStore } from '~/stores/toast'
import templates from '~/lib/templates'

const activeTemplateStore = useActiveTemplateStore()
const { addToast } = useToastStore()

const { activeTemplate } = storeToRefs(activeTemplateStore)

const variables = computed(() => templates[activeTemplate.value].variables)
const template = computed(() => templates[activeTemplate.value].template)
function initVariablesRef() {
  const obj: { [x: string]: string | number } = {}
  Object.keys(variables.value).forEach((key) => {
    obj[key] = variables.value[key].value
  })
  return obj
}

const variablesRef = ref<{ [x: string]: string | number }>(initVariablesRef())

watch(activeTemplate, () => {
  variablesRef.value = initVariablesRef()
})

// make the template reactive
const style = computed(() => {
  const style: { [x: string]: string } = {}
  Object.entries(template.value).forEach(([key, value]) => {
    const regex = /{(\w+)}/g
    const matches = value.matchAll(regex)
    let newValue = value
    for (const match of matches)
      newValue = newValue.replace(match[0], variablesRef.value[match[1]] as string)

    style[key] = newValue
  })
  return style
})

function reset() {
  Object.keys(variables.value).forEach((key) => {
    variablesRef.value[key] = variables.value[key].value
  })
}

function randomizeNumberValues() {
  Object.keys(variables.value).forEach((key) => {
    if ((variables.value[key].type === 'range' || variables.value[key].type === 'number'))
      variablesRef.value[key] = Math.floor(Math.random() * ((variables.value[key].max ?? 0) - (variables.value[key].min ?? 0)) + (variables.value[key].min ?? 0))
  })
}

function randomizeColors() {
  Object.keys(variables.value).forEach((key) => {
    const value = variables.value[key].value
    if (variables.value[key].type === 'color' && typeof value === 'string') {
      const newValue = `#${Math.floor(Math.random() * 16777215).toString(16)}${value.slice(7)}`
      variablesRef.value[key] = newValue
    }
  })
}

const css = computed(() => {
  const cssString = Object.entries(style.value)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')
  return cssString
})

function copyStyle() {
  navigator.clipboard.writeText(css.value)
  addToast({
    variant: 'success',
    title: 'Copied CSS to clipboard',
    id: Date.now(),
  })
}

const containerRef = ref<HTMLElement>()
</script>

<template>
  <div
    ref="containerRef" :style="{
      ...style,
    }" class="relative h-screen w-full snap-start"
  >
    <div
      class="absolute inset-0 m-auto h-fit max-w-[300px] flex flex-col transform gap-2 rounded bg-teal-700 p-3"
    >
      <button class="button" @click="randomizeNumberValues">
        Randomize Pattern {{ activeTemplate }}
      </button>

      <div class="flex gap-2">
        <button class="button w-full" @click="randomizeColors">
          Randomize Colors
        </button>
        <button class="button" @click="reset">
          Reset
        </button>
      </div>
      <div
        v-for="
          (value, key) in variables
        "
        :key="key"
      >
        <input
          v-model="variablesRef[key]"
          :type="value.type"
          :min="value.min"
          :max="value.max"
          :step="value.step"
        >
      </div>

      <button
        class="button"
        @click="copyStyle"
      >
        Copy CSS
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
input {
    width: 100%;
    padding: 5px
}
input[type="color"] {
    padding: 0px;
}
.button{
  @apply bg-teal-500 text-white rounded p-2 transition-colors duration-200 ease-in-out;

}
.button:hover{
  @apply bg-teal-600;
}
</style>
