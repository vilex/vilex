import { BaseHtmlElement } from './htmlElements/BaseHtmlElement';
import { BaseElement } from './BaseElement';
import { ElementEvent } from './htmlElements/ElementEvent';
import { toHyphenCase } from '../utils/toCamelCase'
import { defineElement } from './defineElement'

export class VilexElement extends BaseElement {
  componentName = ''
  ComponentConstructor: CustomElementConstructor
  
  constructor(data: Partial<VilexElement>) {
    super();
    super.initial(data)
    this.componentName = toHyphenCase(this.constructor.name)
    this.ComponentConstructor = defineElement(this.componentName)
  }

  render(): VilexElement | BaseHtmlElement | null {
    return null
  }

  haha() {
    console.log('haha')
    // document.addEventListener('')
  }

}
