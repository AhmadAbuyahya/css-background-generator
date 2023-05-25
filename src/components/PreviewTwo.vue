<script setup lang="ts">
const colorOne = ref('hsl(231, 53%, 75%, 0.5)')
const colorTwo = ref('hsl(226, 39%, 32%)')
const colorThree = ref('hsl(226, 39%, 10%)')
const angleOne = ref(90)
const sizeX = ref(3)
const sizeY = ref(3)

function randomizeAllValues() {
  angleOne.value = Math.ceil(Math.random() * 360)
  sizeX.value = Math.ceil(Math.random() * 20)
  sizeY.value = Math.ceil(Math.random() * 20)
}
function randomizeColors() {
  colorOne.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  colorTwo.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const style = computed(() => ({
  'background-image': `linear-gradient(
      transparent 50%,
      ${colorOne.value} 50%
    ),
    linear-gradient(${angleOne.value}deg, ${colorTwo.value} 50%, ${colorThree.value} 50%)`,
  'background-size': `${sizeX.value}rem ${sizeY.value}rem`,
}))

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
  <div :style="style" class="h-screen w-screen">
    <h1>Preview</h1>
  </div>
  <!-- <div class="h-[500px] w-[500px] bg-teal-700">
    <pre>
      {{
        style }}
    </pre>
  </div> -->
  <div
    class="absolute bottom-0 right-0 top-0 max-w-[300px] flex flex-col transform gap-2 rounded bg-teal-700 p-3"
  >
    <input v-model="colorOne" type="color">
    <input v-model="colorTwo" type="color">
    <input v-model="angleOne" type="range" step="1" min="0" max="360">
    <input v-model="sizeX" type="range" min="1" max="20">
    <input v-model="sizeY" type="range" min="1" max="20">
    <button @click="randomizeAllValues">
      randomize
    </button>
    <button @click="randomizeColors">
      randomize colors
    </button>
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
