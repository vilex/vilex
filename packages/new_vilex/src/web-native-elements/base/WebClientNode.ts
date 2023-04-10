import { unRef } from "../../web-spa-runtime"
import { RefImpl } from "../../web-spa-runtime/reactivity/ref/RefImpl"
import { Properties } from 'csstype'

type TextContent = string | number | RefImpl<string> | RefImpl<number>

export type WebClientNodeParams = Partial<{
  tagName: string
  textContent: TextContent
  style: Properties
  classList: string[]
}>

type ElementType<T extends HTMLElement = HTMLElement> = T | Text


const DefinedPropertyKeysArray: string[] = [
  'textContent',
  'type',
  'src',
  'hidden',
  'contentEditable',
  'title',
  'dir',
  'lang',
  'value',
  'placeholder'
]

const DefinedMethodsArray: string[] = [
  'blur',
  'click',
  'focus',
]

const DefinedEventsArray: string[] = [
  'Click',
  'MouseDown',
  'MouseMove',
  'MouseUp',
  'MouseEnter'
]



/**
 * 
 */
export class WebClientNode<T extends WebClientNodeParams = WebClientNodeParams> {
  tagName = ''
  element: ElementType
  params: T

  private _defineProperKeys: string[] = []
  private _defineMethodKeys: string[] = []


  constructor(data: T) {
    this.element = null as unknown as HTMLElement
    this.params = data
    // DefinedPropertyKeysArray.forEach(k => this.definePropertyKey(k))

    Reflect.set(window, 'n', this)
  }

  /**
   * 这个方法名需求改一下，因为这方法做的事情不止是初始化 params
   */
  initParams() {

    /**
     * 定义属性
     */
    const _self = this
    const _propertyKeys = DefinedPropertyKeysArray.concat(this._defineProperKeys)
    _propertyKeys.forEach(k => Reflect.defineProperty(this, k, {
      get() { return Reflect.get(_self.params, k) },
      set(v) { 
        Reflect.set(_self.element, k, v)
        Reflect.set(_self.params, k, v)
      }
    }))

    /**
     * 定义函数
     */
    const _methodKeys = DefinedMethodsArray.concat(this._defineMethodKeys)
    _methodKeys.forEach(k => Reflect.set(this, k, () => Reflect.get(this.element, k)()))

    const _params = this.params
    this.tagName = _params.tagName || 'div'



    if (_params.textContent instanceof RefImpl) {
      _params.textContent.monitor.watch((newValue) => {
        // this.textContent = newValue
      })
    }

  }

  render(): ElementType {
    this.element = document.createElement(this.tagName)
    // this.textContent = this.params.textContent || ''
    const _style = this.params.style
    if (_style) {
      for (const key in _style) {
        this.element.style[key as 'width'] = _style[key as 'width'] as string
      }
    }
    const _class = this.params.classList
    if (_class) {
      this.element.classList.add(..._class)
    }

    /**
     * 处理属性
     */
    this._defineProperKeys.forEach(propertykey => {
      if (Reflect.has(this.params, propertykey)) {
        Reflect.set(this.element, propertykey, Reflect.get(this.params, propertykey))
      }
    })
    return this.element
  }

  // set textContent(value: TextContent) {
  //   const _value = unRef(value) as string
  //   if (this.params.textContent instanceof RefImpl) {
  //     this.params.textContent.value = _value
  //   } else {
  //     this.params.textContent = _value
  //   }
    
  //   this.element.textContent = String(value)
  // }

  // get textContent() {
  //   return this.params.textContent || ''
  // }


  

  /**
   * 添加属性key
   */
  definePropertyKey(key: string) {
    this._defineProperKeys.push(key)
  }
}