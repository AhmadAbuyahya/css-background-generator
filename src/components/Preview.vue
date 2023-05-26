<script setup lang="ts">
const bgColor = ref('#313466')
const colorOne = ref('#11ffbb')
const colorTwo = ref('#5255bb')
const angleOne = ref(330)
const angleTwo = ref(150)
const angleThree = ref(60)
const angleFour = ref(60)
const sizeX = ref(3)
const sizeY = ref(3)
const PosOne = ref(24)
const PosTwo = ref(-8)

function randomizeAllValues() {
  angleOne.value = Math.ceil(Math.random() * 360)
  angleTwo.value = Math.ceil(Math.random() * 360)
  angleThree.value = Math.ceil(Math.random() * 360)
  sizeX.value = Math.ceil(Math.random() * 20)
  sizeY.value = Math.ceil(Math.random() * 20)
  PosOne.value = Math.ceil(Math.random() * 20) - 10
  PosTwo.value = Math.ceil(Math.random() * 20) - 10
}
function randomizeColors() {
  // bgColor.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  // colorOne.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  // colorTwo.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  // random rgba values
  bgColor.value = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(Math.random() * 255)}, 0.5)`
  colorOne.value = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(Math.random() * 255)}, 0.5)`
  colorTwo.value = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(Math.random() * 255)}, 0.5)`
}

const style = computed(() => ({
  'background-color': bgColor.value,
  'background-image': `conic-gradient(
      from ${angleOne.value}deg at 50% 60%,
      ${colorOne.value} ${angleFour.value}deg,
      transparent ${angleFour.value}deg
    ),
    conic-gradient(from ${angleTwo.value}deg at 50% 30%, ${colorTwo.value} ${angleThree.value}deg, transparent ${angleThree.value}deg)`,
  'background-size': `${sizeX.value}rem ${sizeY.value}rem`,
  'background-position': `0 0, ${PosOne.value}px ${PosTwo.value}px`,
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
    <h1 class="bg-black">
      Preview
    </h1>
  </div>
  <div
    class="absolute bottom-0 right-0 top-0 max-w-[300px] flex flex-col transform gap-2 rounded bg-teal-700 p-3"
  >
    <input v-model="bgColor" type="color">
    <input v-model="colorOne" type="color">
    <input v-model="colorTwo" type="color">
    <input v-model="angleOne" type="range" min="0" max="360">
    <input v-model="angleTwo" type="range" min="0" max="360">
    <input v-model="angleThree" type="range" min="0" max="360">
    <input v-model="angleFour" type="range" min="0" max="360">
    <input v-model="sizeX" type="range" min="1" max="20">
    <input v-model="sizeY" type="range" min="1" max="20">
    <input v-model="PosOne" type="number">
    <input v-model="PosTwo" type="number">
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
