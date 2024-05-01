import { acceptHMRUpdate, defineStore } from 'pinia'
import templates from '~/lib/templates'

export const useActiveTemplateStore = defineStore('activeTemplate', () => {
  const activeTemplate = ref(Object.keys(templates)[0])

  function updateActiveTemplate(slug: string) {
    activeTemplate.value = slug
  }

  return {
    updateActiveTemplate,
    activeTemplate,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useToastStore as any, import.meta.hot))
