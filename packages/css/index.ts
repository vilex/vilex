// todo

import { createStyleElement } from './dom'
import { insert } from './rule'
import { compile, serialize, stringify, middleware, prefixer } from 'stylis'
import { genId } from './utils'

export interface Styled {
  classname: string
  _styled: boolean
}

const { sheet } = createStyleElement()

const vsheet = sheet as CSSStyleSheet

function TemplateFunction(
  strings: TemplateStringsArray,
  ...args: (string | number)[]
): Styled {
  const classname = 'v' + genId()
  const finalstri = strings.reduce(
    (val: string, item: string, index: number) => {
      return (val += item + (index < args.length ? args[index] : ''))
    },
    ''
  )
  const rule = serialize(
    compile(`.${classname} { ${finalstri} }`),
    middleware([prefixer, stringify])
  )

  rule
    .split(`.${classname}`)
    .forEach(rule => rule.trim() && insert(vsheet, `.${classname}${rule}`))

  return { classname, _styled: true }
}

export const css = TemplateFunction
