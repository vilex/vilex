import { toHyphenCase } from '../../utils/toCamelCase'
import { validAttribute } from '../../utils/validAttribute'
import { ViElement } from '../../vii'

export function createElement(tag: string): HTMLElement | Text | SVGSVGElement | SVGUseElement {
  if (tag === 'text') {
    return document.createTextNode('')
  }
  if (tag === 'svg' || tag === 'use') {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }
  return document.createElement(tag)
}

export function customElement(tag: string, targetTag: string) {
  const hy = toHyphenCase(tag)
  const myTagName = hy.includes('-') ? hy : `v-${hy}`
  const already = customElements.get(myTagName)
  if (already) return createElement(myTagName) as HTMLElement
  class MyElement extends HTMLElement {
    constructor() {
      super()
    }
  }
  customElements.define(myTagName, MyElement, { extends: targetTag })
  return createElement(myTagName) as HTMLElement
}

export function customNode(tag: string, node: ViElement) {
  const html = node.el.innerHTML
  const newEl = customElement(tag, node.$.type)
  const el = node.el
  newEl.innerHTML = html

  el.classList.length && newEl.classList.add(...el.classList)
  Object.keys(node.$.event).forEach(k => {
    if (validAttribute(k)) {
      newEl[k as 'id'] = el[k as 'id']
    } else {
      newEl[k as 'onclick'] = null
    }
  })
  Object.keys(node.$.props).forEach(k => {
    if (validAttribute(k)) {
      console.log('props', k)
      newEl[k as 'id'] = el[k as 'id']
      newEl.setAttribute(k, el[k as 'id'])
    }
  })

  const style = getComputedStyle(el)
  style.cssText && (newEl.style.cssText = style.cssText)
  node.el = newEl

  return node
}
