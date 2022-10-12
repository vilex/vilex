const { writeFile, writeFileSync } = require('fs')
const { resolve } = require('path')
const { HTMLElementTagNameMap } = require('./source')

function pathResolve(path) {
  return resolve(process.cwd(), '.', path)
}

// interface 


let outputStr = ''

outputStr += 'import { ViItemPart, ViEvent } from "./velements"\n'
outputStr += 'import { vn, VnItem } from "../vn" \n'
outputStr += 'import { ViElement } from "../../vii" \n'
outputStr += 'type PartialElement<T> = { [P in keyof T]?: T[P] } \n'

const recordTyped = { }
for(let k in HTMLElementTagNameMap) {
  if (!recordTyped[HTMLElementTagNameMap[k]]) {
    recordTyped[HTMLElementTagNameMap[k]] = true
    outputStr += `
type Vi${HTMLElementTagNameMap[k]}Part = ViItemPart | Omit<PartialElement<${HTMLElementTagNameMap[k]}>, keyof ViEvent> ;
type Vi${HTMLElementTagNameMap[k]} = ViElement & { el: ${HTMLElementTagNameMap[k]} };
`
  }
}

for(let k in HTMLElementTagNameMap) {
const str = `
export function ${k}(...items:Vi${HTMLElementTagNameMap[k]}Part[]): Vi${HTMLElementTagNameMap[k]} {
  return vn('${k}', items) as unknown as Vi${HTMLElementTagNameMap[k]} 
}
`
outputStr += str + '\n'
}

writeFileSync(pathResolve('src/vilex-dom/elements/_vilex.elements.ts'), outputStr)



// // function
// outputStr = ''
// outputStr += 'import { vn, VnItem } from "../vn" \n'
// for(let k in HTMLElementTagNameMap) {
// const str = `
// export function ${k}(...items:VnItem[]) { 
//   return vn('${k}', items)
// }
// `
// outputStr += str 
// }

// writeFileSync('../../src/vilex-dom/elements/_domElements.ts', outputStr)

