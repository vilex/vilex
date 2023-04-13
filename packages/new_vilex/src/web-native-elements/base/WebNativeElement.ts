import { ConstantEventNameMapType, ConstantPropertKeyMapType, ConstantPropertKeyArray, ConstantApplyMethodsMapType, ConstantApplyMethodArray } from './../../constant';
import { ConstantEventNameArray, ConstantEventNameMap } from "../../constant"
import { Fragment } from "../../Fragment"
import { renderElements } from "../../renderElements"
import { VarBind } from "../../VarBind"
import { CustomElement } from "./CustomElement"
import { WebClientNode, WebClientNodeParams } from "./WebClientNode"
import { Properties } from 'csstype';
import { getStyledValue } from '../../getStyledValue';


type addPrefix<TKey, TPrefix extends string> = TKey extends string
  ? `${TPrefix}${TKey}`
  : never;

type removePrefix<TPrefixedKey, TPrefix extends string> = TPrefixedKey extends addPrefix<infer TKey, TPrefix>
  ? TKey
  : '';

type prefixedValue<TObject extends object, TPrefixedKey extends string, TPrefix extends string> = TObject extends {[K in removePrefix<TPrefixedKey, TPrefix>]: infer TValue}
  ? TValue
  : never;

type ElementEventType<T extends object = typeof ConstantEventNameMap> = {
  [K in addPrefix<keyof T, 'on'>]?: ( evt:  prefixedValue<T, K, 'on'>) => void
}



export type WebNativeElementParams = Partial<{
  children: (WebNativeElement | CustomElement)[]
  bindVar: VarBind
  style: Properties
}> & WebClientNodeParams & ElementEventType & ConstantPropertKeyMapType & ConstantApplyMethodsMapType


export class WebNativeElement<T extends WebNativeElementParams = WebNativeElementParams> extends WebClientNode<T> {
  private eListeners: Map<string, ((evt: Event) => void)[]> = new Map(ConstantEventNameArray.map(n => [n, []]))
  constructor(data: T) {
    super(data)
    this.eListeners.forEach((listeners, key) => {
      Reflect.defineProperty(this, `on${key}`, {
        set(callback: () => void) {
          listeners.push(callback)
        }
      })
    })
    const _self = this;
    ConstantPropertKeyArray.forEach(key => {
      Reflect.defineProperty(this, key, {
        set(val) {
          data[key as 'children'] = val
          if (_self.element) {
            _self.element[key as 'textContent'] = val
          }
        }
      })
    })
    ConstantApplyMethodArray.forEach(key => {
      Reflect.defineProperty(this, key, {
        value: () => {
          if (_self.element) {
            _self.element[key as 'normalize']()
          }
        }
      })
    })

    return this as unknown as WebNativeElement<T> & ElementEventType & ConstantPropertKeyMapType & ConstantApplyMethodsMapType
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
    
  }

  render() {
    super.render()

    Object.assign(this, this.params)
    this.eListeners.forEach((listeners, key) => {
      if (listeners.length) {
        this.element.addEventListener(key.toLocaleLowerCase(), (evt) => {
          listeners.forEach(listener => listener(evt))
        })
      }
    })

    const _style = this.params.style
    if (_style) {
      for (const key in _style) {
        const val = getStyledValue(_style, key)
        this.element.style[key as 'width'] = val as string
      }
    }
    
    if (this.params.bindVar) {
      this.params.bindVar.value = this
    }
    return this.element
  }
}