import { IDataNode } from './vilex-dom/elements/velements'
import '@vilex/utils'

export interface ViElement extends IDataNode {
  el: HTMLElement
}

export * from './vilex'
export * from './vilex-dom'
export * from './element'
export * from './css'
export * from './utils/replaceNode'
