// todo

import { createStyleElement } from './dom'
import { insert } from './rule'
import { compile, serialize, stringify, middleware, prefixer } from 'stylis'
import { genId } from './utils'

function TemplateFunction(strings: TemplateStringsArray) {
  const classname = genId()
  const rule = serialize(
    compile(`.${classname} { ${strings[0]} }`),
    middleware([prefixer, stringify])
  )

  const rules = rule.split(`.${classname}`)
  console.log(rules)
  rules.forEach(rule => rule.trim() && insert(sheet, `.${classname}${rule}`))

  return classname
}

const { sheet } = createStyleElement()

export const css = TemplateFunction
