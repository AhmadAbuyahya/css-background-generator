import { acceptHMRUpdate, defineStore } from 'pinia'
import tinycolor from 'tinycolor2'
import templates from '~/lib/templates'

export const useActiveTemplateStore = defineStore('activeTemplate', () => {
  const activeTemplate = ref(Object.keys(templates)[0])

  function updateActiveTemplate(slug: string) {
    activeTemplate.value = slug
  }

  const variables = computed(() => templates[activeTemplate.value].variables)
  const template = computed(() => templates[activeTemplate.value].template)

  function initVariablesRef() {
    const obj: { [key: string]: string | number } = {}
    Object.keys(variables.value).forEach((key) => {
      obj[key] = variables.value[key].value
    })
    return obj
  }

  const variablesRef = ref<{ [key: string]: string | number }>(initVariablesRef())

  watch(activeTemplate, () => {
    variablesRef.value = initVariablesRef()
  })

  // make the template reactive
  const style = computed(() => {
    const style: { [key: string]: string } = {}
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
        const newColor = tinycolor.random()
        const alpha = tinycolor(value).getAlpha()
        newColor.setAlpha(alpha)
        variablesRef.value[key] = newColor.toHexString()
      }
    })
  }

  const randomizeAll = () => {
    randomizeColors()
    randomizeNumberValues()
  }

  const css = computed(() => {
    const cssString = Object.entries(style.value)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')
    return cssString
  })

  return {
    updateActiveTemplate,
    activeTemplate,
    css,
    randomizeColors,
    randomizeNumberValues,
    reset,
    variables,
    variablesRef,
    style,
    randomizeAll,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useToastStore as any, import.meta.hot))
