import { toHyphenCase } from '../utils/toCamelCase'
import { defineElement } from './defineElement'

export class VilexElement {
  componentName = ''
  ComponentConstructor: CustomElementConstructor

  data: any = {}

  children: any[] = []

  constructor() {
    this.componentName = toHyphenCase(this.constructor.name)
    this.ComponentConstructor = defineElement(this.componentName)
    console.log(this.render())
  }

  render(): any {
    return ''
  }

  haha() {
    console.log('haha')
  }
}
