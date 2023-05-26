<script setup lang="ts">
import type { Variables } from 'src/types'

const props = defineProps<{
  template: Record<string, string>
  variables: Variables
}>()

const obj: { [x: string]: string | number } = {}

Object.keys(props.variables).forEach((key) => {
  obj[key] = props.variables[key].value
})

const variablesRef = ref<{ [x: string]: string | number }>(obj)

// make the template reactive
const style = computed(() => {
  const template = props.template
  const style: { [x: string]: string } = {}
  Object.entries(template).forEach(([key, value]) => {
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
  Object.keys(props.variables).forEach((key) => {
    variablesRef.value[key] = props.variables[key].value
  })
}

function randomizeNumberValues() {
  Object.keys(props.variables).forEach((key) => {
    if (key !== 'brightness' && (props.variables[key].type === 'range' || props.variables[key].type === 'number'))
      variablesRef.value[key] = Math.floor(Math.random() * ((props.variables[key].max ?? 0) - (props.variables[key].min ?? 0)) + (props.variables[key].min ?? 0))
  })
}

function randomizeColors() {
  Object.keys(props.variables).forEach((key) => {
    if (props.variables[key].type === 'color' && (typeof props.variables[key].value === 'string'))
      variablesRef.value[key] = `#${Math.floor(Math.random() * 16777215).toString(16)}${props.variables[key].value.slice(7)}`
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
}
</script>

<template>
  <div
    :style="{
      ...style,
    }"
    class="asa h-screen w-screen"
  >
    <h1>Preview</h1>
  </div>
  <div
    class="absolute bottom-0 right-0 top-0 max-w-[300px] flex flex-col transform gap-2 rounded bg-teal-700 p-3"
  >
    <button @click="randomizeNumberValues">
      randomize numbers
    </button>

    <button @click="randomizeColors">
      randomize colors
    </button>
    <button @click="reset">
      reset
    </button>
    <input
      v-for="
        (value, key) in props.variables
      "
      :key="key"
      v-model="variablesRef[key]"
      :type="value.type"
      :min="value.min"
      :max="value.max"
      :step="value.step"
    >
    <!-- <input v-model="brightness" type="range" max="100" min="0"> -->
    <button
      @click="copyStyle"
    >
      copy styles
    </button>
    <pre class="text-left" style="white-space: inherit;">{{ css }}</pre>
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
</style>
