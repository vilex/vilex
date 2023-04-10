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
}



