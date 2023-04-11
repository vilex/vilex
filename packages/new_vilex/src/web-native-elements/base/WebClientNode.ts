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






/**
 * 
 */
export class WebClientNode<T extends WebClientNodeParams = WebClientNodeParams> {
  tagName = ''
  element: ElementType
  params: T

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

    const _params = this.params
    this.tagName = _params.tagName || 'div'


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
    return this.element
  }

}