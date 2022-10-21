import { IDataNode } from './vilex-dom/elements/velements'
import { vn } from './vilex-dom/vn'

export interface ViElement extends IDataNode {
  el: HTMLElement
}

export * from './vilex'
export * from './vilex-dom'

/** Create a new element.  */
export const createElement = vn
