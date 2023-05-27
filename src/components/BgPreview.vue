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
    if (!props.variables[key].nonRandomizable && (props.variables[key].type === 'range' || props.variables[key].type === 'number'))
      variablesRef.value[key] = Math.floor(Math.random() * ((props.variables[key].max ?? 0) - (props.variables[key].min ?? 0)) + (props.variables[key].min ?? 0))
  })
}

function randomizeColors() {
  Object.keys(props.variables).forEach((key) => {
    const value = props.variables[key].value
    if (props.variables[key].type === 'color' && typeof value === 'string') {
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
}

function randomizeValue(key: string) {
  const value = props.variables[key]
  if (value.type === 'color' && typeof value.value === 'string') {
    const newValue = `#${Math.floor(Math.random() * 16777215).toString(16)}${value.value.slice(7)}`
    variablesRef.value[key] = newValue
  }
  else if (!value.nonRandomizable && (value.type === 'range' || value.type === 'number')) {
    variablesRef.value[key] = Math.floor(Math.random() * ((value.max ?? 0) - (value.min ?? 0)) + (value.min ?? 0))
  }
}
</script>

<template>
  <div
    :style="{
      ...style,
    }"
    class="asa relative h-screen w-screen"
  >
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
      <div
        v-for="
          (value, key) in props.variables
        "
        :key="key"
      >
        <button v-if="!value.nonRandomizable" @click="randomizeValue(key as string)">
          <i>ada</i>
        </button>
        <input
          v-model="variablesRef[key]"
          :type="value.type"
          :min="value.min"
          :max="value.max"
          :step="value.step"
        >
      </div>
      <!-- <input v-model="brightness" type="range" max="100" min="0"> -->
      <button
        @click="copyStyle"
      >
        copy styles
      </button>
      <pre class="text-left" style="white-space: inherit;">{{ css }}</pre>
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
</style>
