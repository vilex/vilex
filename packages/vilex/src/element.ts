import { css } from 'styled'
import { ViElement } from './vii'
import { vn, VnItem } from './vilex-dom/vn'

/**
 *
 * @param tag
 * @returns
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(tag: K) {
  return function (strings: TemplateStringsArray) {
    return function (...parts: VnItem[]) {
      return vn(tag, [css(strings), ...parts])
    }
  }
}
