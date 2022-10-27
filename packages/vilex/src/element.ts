// import { VnItem } from './vilex-dom/vn'

import { vn } from './vilex-dom/vn'

/**
 *
 * @param tag
 * @returns
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(tag: K) {
  return vn(tag)
}
