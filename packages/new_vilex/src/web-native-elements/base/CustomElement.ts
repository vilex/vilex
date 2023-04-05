import { WebNativeElement } from './WebNativeElement';
import { defineComponent } from "../../custom-web-components/defineComponent"
import { renderElement } from "../../renderElements"

export class CustomElement {
  componentName = ''
  Constructor: CustomElementConstructor
  rootElement: HTMLElement
  element: WebNativeElement
  constructor() {
    this.componentName = this.constructor.name
    this.Constructor = defineComponent(this.componentName)
    this.rootElement = null as unknown as HTMLElement
    this.element = null as unknown as WebNativeElement
  }

  render() {
    return null as unknown as WebNativeElement
  }

  renderRoot() {
   this.element = this.render() 
   renderElement(this.element)
   this.rootElement = new this.Constructor(this.element.element)
  }

}