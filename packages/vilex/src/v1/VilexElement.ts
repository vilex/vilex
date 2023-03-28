import { toHyphenCase } from '../utils/toCamelCase'
import { defineElement } from './defineElement'

export class VilexElement {
  componentName = ''
  ComponentConstructor: CustomElementConstructor
  constructor() {
    this.componentName = toHyphenCase(this.constructor.name)
    this.ComponentConstructor = defineElement(this.componentName, this.root)
  }

  get root() {
    return null
  }

  get render() {
    return new this.ComponentConstructor()
  }
}
