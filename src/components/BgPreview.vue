<script setup lang="ts">
import type { Variables } from 'src/types'

const props = defineProps<{
  template: Record<string, string>
  variables: Variables
}>()

const brightness = ref(75)
const blur = ref(0)

const obj: { [x: string]: string | number } = {}

Object.keys(props.variables).forEach((key) => {
  obj[key] = props.variables[key].value
})

const variablesRef = ref<{ [x: string]: string | number }>(obj)

// make the template reactive
const style = computed(() => {
  const template = props.template
  const style: { [x: string]: string } = {
    filter: `brightness(${brightness.value}%) blur(${blur.value}px)`,
  }
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
    if ((props.variables[key].type === 'range' || props.variables[key].type === 'number'))
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

const containerRef = ref<HTMLElement>()

onMounted(() => {
  containerRef.value?.addEventListener('mousedown', (e) => {
    // captue five consecutive clicks
    if (e.button === 0 && e.detail === 5) {
      e.preventDefault()
      e.stopPropagation()
      partyTime()
    }
  })
})

function partyTime() {
  const interval = setInterval(() => {
    randomizeNumberValues()
    randomizeColors()
  }, 300)
  setTimeout(() => {
    clearInterval(interval)
    reset()
  }, 5000)
}
</script>

<template>
  <div ref="containerRef" class="relative snap-start">
    <div
      :style="{
        ...style,
      }"
      class="relative h-screen w-screen"
    />
    <div
      class="absolute inset-0 m-auto h-fit max-w-[300px] flex flex-col transform gap-2 rounded bg-teal-700 p-3"
    >
      <button class="button" @click="randomizeNumberValues">
        Randomize Pattern
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
          (value, key) in props.variables
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
      <div>
        <input
          v-model="brightness"
          type="range"
          :min="1"
          :max="100"
          :step="1"
        >
      </div>
      <div>
        <input
          v-model="blur"
          type="range"
          :min="0"
          :max="10"
          :step="1"
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
