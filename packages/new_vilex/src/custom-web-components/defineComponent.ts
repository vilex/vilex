import { toHyphenCase } from "../toHyphenCase"


export function defineComponent(componentName: string) {
  const _name = toHyphenCase(componentName)
  const Constructor = customElements.get(_name)
  if (Constructor) {
    return Constructor
  }

  class CustomElement extends HTMLElement {
    constructor(...childs: any[]) {
      super()
      const shaddow = this.attachShadow({ mode: 'open' })
      shaddow.append(...childs)
    }
  }
  customElements.define(_name, CustomElement)
  return CustomElement
}
