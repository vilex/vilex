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

export class WebClientNode<T extends WebClientNodeParams = WebClientNodeParams> {
  tagName = ''
  element: ElementType
  params: T
  constructor(data: T) {
    this.element = null as unknown as HTMLElement
    this.params = data
  }

  initParams() {
    const _params = this.params
    this.tagName = _params.tagName || 'div'
    if (_params.textContent instanceof RefImpl) {
      _params.textContent.monitor.watch((newValue) => {
        this.textContent = newValue
      })
    }
    
  }

  render(): ElementType {
    this.element = document.createElement(this.tagName)
    this.textContent = this.params.textContent || ''
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

  set textContent(value: TextContent) {
    const _value = unRef(value) as string
    if (this.params.textContent instanceof RefImpl) {
      this.params.textContent.value = _value
    } else {
      this.params.textContent = _value
    }
    this.element.textContent = String(value)
  }

  get textContent() {
    return this.params.textContent || ''
  }

}