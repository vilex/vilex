import { WebNativeElement, WebNativeElementParams } from "../base/WebNativeElement"

type ButtonType = 'button' | 'reset' | 'submit' | 'checkbox' | 'radio' | 'select'
type NativeButtonParams = Partial<{
  type: ButtonType
  /**
   * 禁用
   */
  disabled: boolean
}> & WebNativeElementParams


export class NativeButton<T extends NativeButtonParams = NativeButtonParams > extends WebNativeElement<T> {
  element: HTMLButtonElement
  constructor(data: T) {
    data.tagName = 'button'
    super(data)
    this.element = null as unknown as HTMLButtonElement
  }

  render() {
    super.render()
    this.element.type = this.type


    // 一种是属性

    
    return this.element
  }

  set disabled(value: boolean) {
    this.element.disabled = this.params.disabled = value
  }

  set type(type: ButtonType) {
    this.element.type = this.params.type = type  
  }

  get type() {
    return this.params.type || 'button'
  }
}



