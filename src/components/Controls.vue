<script setup lang="ts">
import startCase from 'lodash.startcase'
import { storeToRefs } from 'pinia'
import { useActiveTemplateStore } from '~/stores/activeTemplate'

const activeTemplateStore = useActiveTemplateStore()
const { variables, variablesRef } = storeToRefs(activeTemplateStore)
</script>

<template>
  <div class="h-full flex flex-col transform justify-center gap-2 overflow-y-scroll border-t-1 bg-[#171717] p-6 md:h-100dvh md:border-l-1 md:border-t-0">
    <div class="mb-10 flex flex-col gap-2">
      <button class="button" @click="activeTemplateStore.randomizeNumberValues">
        <div class="i-carbon-tornado" />
        Randomize Pattern
      </button>

      <button class="button w-full" @click="activeTemplateStore.randomizeColors">
        <div class="i-carbon-paint-brush" />
        Randomize Colors
      </button>
      <button class="button" @click="activeTemplateStore.randomizeAll">
        <div class="i-carbon-tornado" />
        Randomize All
        <div class="i-carbon-paint-brush" />
      </button>

      <button class="button" @click="activeTemplateStore.reset">
        <div class="i-carbon-restart" />
        Reset
      </button>
    </div>
    <div class="overflow-y-auto md:max-h-300px md:max-h-unset">
      <div v-for="(value, key) in variables" :key="key" class="mb-4">
        <label class="block w-full text-left" :for="String(key)">
          {{ startCase(String(key)) }}
        </label>
        <input
          :id="String(key)" v-model="variablesRef[key]" :type="value.type" :min="value.min" :max="value.max"
          :step="value.step"
        >
      </div>
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
