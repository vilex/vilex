// createElement
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K
): HTMLElementTagNameMap[K]
export function createElement(tag: string) {
  if (tag === 'text') {
    return document.createTextNode('')
  }
  if (tag === 'svg' || tag === 'use') {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
  }
  return document.createElement(tag)
}
