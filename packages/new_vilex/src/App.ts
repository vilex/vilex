import { WebNativeElement } from './web-native-elements/base/WebNativeElement';
import { renderElement, renderElements } from "./renderElements"
import { CustomElement } from './web-native-elements/base/CustomElement';

export class App {
  selector: string
  rootElement: HTMLElement
  constructor(selector: string) {
    this.selector = selector
    const root = document.querySelector(selector)
    if (!root) console.error(`new App(${selector})`)
    this.rootElement = root as HTMLElement
  }
  render(e: WebNativeElement | CustomElement) {
    renderElements([e])
    if (e instanceof CustomElement) {
      this.rootElement.appendChild(e.rootElement)
    } else {
      this.rootElement.appendChild(e.element)
    }
  }
}