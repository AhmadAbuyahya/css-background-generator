import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

interface Variable {
  type: 'color' | 'number' | 'range'
  value: string | number
  min?: number
  max?: number
  step?: number
}

export interface Variables {
  [key: string]: Variable
}
