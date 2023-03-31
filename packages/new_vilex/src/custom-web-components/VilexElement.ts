import { BaseElement } from "../web-native-elements/base/BseElement"
import { toHyphenCase } from "./utils/toCamelCase"
import { defineComponent } from "./defineComponent"


export class VilexElement {
  componentName = ''
  ComponentConstructor: CustomElementConstructor
  
  children: (VilexElement | BaseElement)[] = []
  el: VilexElement | BaseElement | HTMLElement | undefined

  constructor() {
    
    this.componentName = toHyphenCase(this.constructor.name)
    this.ComponentConstructor = defineComponent(this.componentName)
  }

  initial(data: Partial<VilexElement>) {
    Object.assign(this, data)
  }

  render(): VilexElement | BaseElement | null {
    return null
  }

  

}
