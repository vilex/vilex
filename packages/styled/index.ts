// todo

import { createStyleElement } from './dom'
import { insert } from './rule'
import { compile, serialize, stringify, middleware, prefixer } from 'stylis'
import { genId } from './utils'

export interface Styled {
  classname: string
}

const { sheet } = createStyleElement()

const vsheet = sheet as CSSStyleSheet

function TemplateFunction(strings: TemplateStringsArray): Styled {
  const classname = genId()

  const rule = serialize(
    compile(`.${classname} { ${strings[0]} }`),
    middleware([prefixer, stringify])
  )

  rule
    .split(`.${classname}`)
    .forEach(rule => rule.trim() && insert(vsheet, `.${classname}${rule}`))

  return { classname }
}

export const css = TemplateFunction
