export function defineElement(componentName: string) {
  const Constructor = customElements.get(componentName)
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
  customElements.define(componentName, CustomElement)
  return CustomElement
}
