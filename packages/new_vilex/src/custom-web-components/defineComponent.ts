import { appConf } from "../AppConf"
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

      if (appConf.webComponentsUseShaddow) {
        /* TODO
        const styled = StyledMap.get(_name);
        const shaddow = this.attachShadow({ mode: 'closed' })
        if (styled) {
          const style = document.createElement('style')
          style.append(styled.rules.join('\n'))
          styled.styleElement = style;
          shaddow.append(style)
        }
        */
      } else {
        this.append(...childs)
      }
    }

  }
  customElements.define(_name, CustomElement)
  return CustomElement
}
