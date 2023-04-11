import { WebNativeElement } from './WebNativeElement';
import { defineComponent } from "../../custom-web-components/defineComponent"
import { renderElement, renderElements } from "../../renderElements"

export class CustomElement {
  componentName = ''
  Constructor: CustomElementConstructor
  rootElement: HTMLElement
  element: WebNativeElement | CustomElement
  constructor() {
    this.componentName = this.constructor.name
    this.Constructor = defineComponent(this.componentName)
    this.rootElement = null as unknown as HTMLElement
    this.element = null as unknown as WebNativeElement
  }

  render(): WebNativeElement | CustomElement {
    return null as unknown as WebNativeElement
  }

  renderRoot() {
    this.element = this.render()
    renderElements([this.element])
    if (this.element instanceof CustomElement) {
      this.rootElement = this.element.rootElement
    } else {
      this.rootElement = new this.Constructor(this.element.element)
    }
  }
}