import { WebNativeElement } from './web-native-elements/base/WebNativeElement';
import { renderElement } from "./renderElements"

export class App {
  selector: string
  rootElement: HTMLElement
  constructor(selector: string) {
    this.selector = selector
    const root = document.querySelector(selector)
    if (!root) console.error(`new App(${selector})`)
    this.rootElement = root as HTMLElement
  }
  render(e: WebNativeElement) {
    renderElement(e)
    this.rootElement.appendChild(e.element)
  }
}