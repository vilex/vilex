import { ELEMENT_TYPE, STYLED_ID, STYLED_ID_V } from './constants'

export function createStyleElement(target?: HTMLElement): HTMLStyleElement {
  const parent = target || document.head
  const style = document.createElement('style')
  const prevStyle = findLastStyleTag(parent)
  const nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null
  style.setAttribute(STYLED_ID, STYLED_ID_V)
  parent.insertBefore(style, nextSibling)
  return style
}

export function findLastStyleTag(target: HTMLElement): void | HTMLStyleElement {
  const { childNodes } = target

  for (let i = childNodes.length; i >= 0; i--) {
    const child = childNodes[i] as ChildNode & {
      hasAttribute: (qualifiedName: string) => boolean
    }

    if (
      child &&
      child.nodeType === ELEMENT_TYPE &&
      child.hasAttribute(STYLED_ID)
    ) {
      return child as HTMLStyleElement
    }
  }

  return undefined
}
