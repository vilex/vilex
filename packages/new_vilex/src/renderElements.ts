import { WebNativeElement } from './web-native-elements/base/WebNativeElement';
import { CustomElement } from './web-native-elements/base/CustomElement'

function renderWebNativeElement(e: WebNativeElement) {
  if (e.element) return
  e.initParams()
  e.render()
  const _childs = e.params.children
  if (_childs && _childs.length) {
    _childs.forEach(child => {
      if (child instanceof WebNativeElement) {
        renderWebNativeElement(child)
        e.element.appendChild(child.element)
      } else {
        renderCustomElement(child)
        e.element.appendChild(child.rootElement)                 
      }
    })
    renderElements(_childs)
  }
}

function renderCustomElement(e: CustomElement) {
  if (e.rootElement) return
  e.renderRoot()
}


export function renderElements(es: (WebNativeElement | CustomElement)[]) {
  es.forEach(node => {
    if (node.element) {
      return true
    }
    if (node instanceof WebNativeElement) {
      renderWebNativeElement(node)
    } else {
      renderCustomElement(node)
    }
  })
}

export function renderElement(e: WebNativeElement) {
  renderElements([e])
}
