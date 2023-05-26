<script setup lang="ts">
const template = {
  'background-image': `linear-gradient(
      transparent 50%,
      {colorOne} 50%
    ),
    linear-gradient({angleOne}deg, {colorTwo} 50%, {colorThree} 50%)`,
  'background-size': '{sizeX}rem {sizeY}rem',
}

const variables = {
  colorOne: {
    type: 'color',
    value: '#9da8e150',
  },
  colorTwo: {
    type: 'color',
    value: '#324171',
  },
  colorThree: {
    type: 'color',
    value: '#101423',
  },
  angleOne: {
    type: 'range',
    value: 90,
    min: 0,
    max: 360,
  },
  sizeX: {
    type: 'range',
    value: 4,
    min: 3,
    max: 20,
  },
  sizeY: {
    type: 'range',
    value: 4,
    min: 3,
    max: 20,
  },
} as const
</script>

<template>
  <PreviewTwo :template="template" :variables="variables" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
