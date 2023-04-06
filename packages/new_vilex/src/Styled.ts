import { toHyphenCase } from "./toHyphenCase"
import { compile, serialize, stringify, middleware, prefixer, Element } from 'stylis'
import { nanoid } from "nanoid"

export const StyledMap: Map<string, Styled> = new Map()

export class Styled {
  name: string = ''
  rules: string[] = []
  styleElement: HTMLStyleElement|null = null
  constructor(webComponentNameOrParentElement?: string | HTMLElement) {
    if (typeof webComponentNameOrParentElement === 'string') {
      this.name = toHyphenCase(webComponentNameOrParentElement)
      StyledMap.set(this.name, this)
    } else {
      this.styleElement = document.createElement('style')
      if (webComponentNameOrParentElement) {
        webComponentNameOrParentElement.appendChild(this.styleElement)
      } else {
        document.head.appendChild(this.styleElement)
      }
    }
    this.css.bind(this)
  }
  
  css(strings: TemplateStringsArray, ...args: (string | number)[]) {
    const len = args.length
    const result = strings.reduce((val, item, index) => {
      val.push(item)
      index < len && val.push(strings[index])
      return val
    }, [] as string[])
    const finalStr = result.join('')
    const nameId = 'v' + nanoid()
    const rule = serialize(compile(`.${nameId} { ${finalStr} }`), middleware([prefixer, stringify]))
    if (this.styleElement) {
      this.styleElement.append(`\n${rule}`)
    } else {
      this.rules.push(rule)
    }
    return nameId
  }
}