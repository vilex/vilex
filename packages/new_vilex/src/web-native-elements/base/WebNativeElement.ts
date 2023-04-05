import { Fragment } from "../../Fragment"
import { renderElements } from "../../renderElements"
import { VarBind } from "../../VarBind"
import { CustomElement } from "./CustomElement"
import { ElementEvent, ElementEventNameList, ElementEventParams } from "./ElementEvent"
import { WebClientNode } from "./WebClientNode"


export type WebNativeElementParams = Partial<{
  children: (WebNativeElement | CustomElement)[]
  bindVar: VarBind
}> & ElementEventParams


export class WebNativeElement<T extends WebNativeElementParams = WebNativeElementParams> extends ElementEvent<T> {
  private eListeners: Map<string, ((evt: Event) => void)[]> = new Map(ElementEventNameList.map(n => [n, []]))
  constructor(data: T) {
    super(data)
    this.eListeners.forEach((listeners, key) => {
      Reflect.defineProperty(this, `on${key}`, {
        set(callback: () => void) {
          listeners.push(callback)
        }
      })
    })
  }



  add(chils: WebClientNode[]): void
  add(...childs: WebClientNode[]): void
  add(...childs: any) {
    const _childs: WebNativeElement[] = Array.isArray(childs[0]) ? childs[0] : childs
    renderElements(_childs)
    Fragment.append(..._childs.map(c => c.element))
    this.params.children?.push(..._childs)
    this.element.appendChild(Fragment)
  }



  initParams(): void {
    super.initParams()
    if (!this.params.children) {
      this.params.children = []
    }
    ElementEventNameList.forEach(key => {
      const _key = `on${key}` as 'onClick'
      if (this.params[_key]) {
        this[_key] = this.params[_key]
      }
    })
  }

  render() {
    super.render()
    this.eListeners.forEach((listeners, key) => {
      if (listeners.length) {
        this.element.addEventListener(key.toLocaleLowerCase(), (evt) => {
          listeners.forEach(listener => listener(evt))
        })
      }
    })
    if (this.params.bindVar) {
      this.params.bindVar.value = this
    }
    return this.element
  }
}