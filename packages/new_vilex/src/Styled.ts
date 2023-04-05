import { toHyphenCase } from "./toHyphenCase"

export class Styled {
  name: string 
  constructor(name: string) {
    this.name = toHyphenCase(name)
  }
  
  css(strings: TemplateStringsArray, ...args: (string | number)[]) {
    const len = args.length
    const result = strings.reduce((val, item, index) => {
      val.push(item)
      index < len && val.push(strings[index])
      return val
    }, [] as string[])
    const finalStr = result.join('')  
  }
}


// function TemplateFunction(strings: TemplateStringsArray, ...args: (string | number)[]): Styled {
//   const classname = 'Vi' + nanoid()
//   const len = args.length

//   const result = strings.reduce((val, item, index) => {
//     val.push(item)
//     index < len && val.push(strings[index])
//     return val
//   }, [] as string[])
//   const finalStr = result.join('')
//   const rule = serialize(compile(`.${classname} { ${finalStr} }`), middleware([prefixer, stringify]))

//   rule.split(`.${classname}`).forEach(rule => rule.trim() && insert(vsheet, `.${classname}${rule}`))

//   return { classname, _styled: true }
// }