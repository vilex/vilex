// todo

import { compile, serialize, stringify, middleware, prefixer } from 'stylis'
import { nanoid } from 'nanoid'

type StyleNode = ChildNode & { hasAttribute: (qualifiedName: string) => boolean }

enum StyledConstant {
  StyledId = 'vilex-styled',
  StyledIdValue = 'true',
  ElementType = 1
}

/**
 * 判断是否是由当前工具创建的元素
 * @param target 
 * @returns 
 */
function isStyledElement<T extends StyleNode>(target:T) {
  return target && target.nodeType === StyledConstant.ElementType && target.hasAttribute(StyledConstant.StyledId)
}

/**
 * 查找 style 元素
 * @param target 
 * @returns 
 */
export function findLastStyleTag(target: HTMLElement): void | HTMLStyleElement {
  const { childNodes } = target
  for (let i = childNodes.length; i >= 0; i--) {
    const child = childNodes[i] as StyleNode
    if (isStyledElement(child)) {
      return child as HTMLStyleElement
    }
  }
}

let length = 0

/**
 * 插入一个规则
 * @param sheet 
 * @param rule 
 */
export function insert(sheet: CSSStyleSheet, rule: string) {
  try {
    sheet.insertRule(rule, length)
    length++
  } catch {}
}

/**
 * 创建一个 style
 * @param target 
 * @returns 
 */
export function createStyleElement(target?: HTMLElement): HTMLStyleElement {
  const parent = target || document.head
  const style = document.createElement('style')
  const prevStyle = findLastStyleTag(parent)
  const nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null
  style.setAttribute(StyledConstant.StyledId, StyledConstant.StyledIdValue)
  style.setAttribute('type', 'text/css')
  parent.insertBefore(style, nextSibling)
  return style
}


const { sheet } = createStyleElement()

const vsheet = sheet as CSSStyleSheet

function TemplateFunction(strings: TemplateStringsArray, ...args: (string | number)[]): string {
  const classname = 'v' + nanoid()
  const len = args.length
  const result = strings.reduce((val, item, index) => {
    val.push(item)
    index < len && val.push(strings[index])
    return val
  }, [] as string[])
  const finalStr = result.join('')
  const rule = serialize(compile(`.${classname} { ${finalStr} }`), middleware([prefixer, stringify]))
  rule.split(`.${classname}`).forEach(rule => rule.trim() && insert(vsheet, `.${classname}${rule}`))
  return classname
}

export const css = TemplateFunction
