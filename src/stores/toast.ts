import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Toast } from '~/types'

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([])

  /**
   * Create a new toast
   *
   * @param toast - new toast to add
   */
  function addToast(toast: Toast) {
    toasts.value.push(toast)
  }

  /**
   * Remove a toast
   *
   * @param id - id of toast to remove
   */
  function clearToast(id: number) {
    const index = toasts.value.findIndex(toast => toast.id === id)
    toasts.value.splice(index, 1)
  }

  return {
    toasts,
    addToast,
    clearToast,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useToastStore as any, import.meta.hot))
