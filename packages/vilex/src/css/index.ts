// todo

import { createStyleElement } from './dom'
import { insert } from './rule'
import { compile, serialize, stringify, middleware, prefixer } from 'stylis'
import { nanoid } from 'nanoid'

export interface Styled {
  classname: string
  _styled: boolean
}

const { sheet } = createStyleElement()

const vsheet = sheet as CSSStyleSheet

function TemplateFunction(strings: TemplateStringsArray, ...args: (string | number)[]): Styled {
  const classname = 'Vi' + nanoid()
  const len = args.length

  const result = strings.reduce((val, item, index) => {
    val.push(item)
    index < len && val.push(strings[index])
    return val
  }, [] as string[])
  const finalStr = result.join('')
  const rule = serialize(compile(`.${classname} { ${finalStr} }`), middleware([prefixer, stringify]))

  rule.split(`.${classname}`).forEach(rule => rule.trim() && insert(vsheet, `.${classname}${rule}`))

  return { classname, _styled: true }
}

export const css = TemplateFunction
