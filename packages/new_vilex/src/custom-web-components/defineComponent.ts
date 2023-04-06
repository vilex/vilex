import { StyledMap } from "../Styled"
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
      const styled = StyledMap.get(_name)
      if (styled) {
        const style = document.createElement('style')
        style.append(styled.rules.join('\n'))
        styled.styleElement = style
        styled.rules.length = 0
        shaddow.append(style)
      }
      shaddow.append(...childs)
    }
  }
  customElements.define(_name, CustomElement)
  return CustomElement
}
