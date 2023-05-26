<script setup lang="ts">
const template = {
  'background-color': '{bgColor}',
  'background-image': `conic-gradient(
      from {angleOne}deg at 50% 60%,
      {colorOne} {angleFour}deg,
      transparent {angleFour}deg
    ),
    conic-gradient(from {angleTwo}deg at 50% 30%, {colorTwo} {angleThree}deg, transparent {angleThree}deg)`,
  'background-size': '{sizeX}rem {sizeY}rem',
  'background-position': '0 0, {PosOne}px {PosTwo}px',
  'filter': 'brightness({brightness}%)',
}

const variables = {
  bgColor: {
    type: 'color',
    value: '#313466',
  },
  colorOne: {
    type: 'color',
    value: '#11ffbb',
  },
  colorTwo: {
    type: 'color',
    value: '#5255bb',
  },
  angleOne: {
    type: 'range',
    value: 330,
    min: 1,
    max: 360,
  },
  angleTwo: {
    type: 'range',
    value: 150,
    min: 1,
    max: 360,
  },
  angleThree: {
    type: 'range',
    value: 60,
    min: 1,
    max: 360,
  },
  angleFour: {
    type: 'range',
    value: 60,
    min: 1,
    max: 360,
  },
  sizeX: {
    type: 'range',
    value: 3,
    min: 3,
    max: 20,
  },
  sizeY: {
    type: 'range',
    value: 3,
    min: 3,
    max: 20,
  },
  PosOne: {
    type: 'range',
    value: 1.5 * 16,
    min: -100,
    max: 100,
  },
  PosTwo: {
    type: 'range',
    value: -0.5 * 16,
    min: -100,
    max: 100,
  },
  brightness: {
    type: 'range',
    value: 50,
    min: 10,
    max: 100,
    step: 10,
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
