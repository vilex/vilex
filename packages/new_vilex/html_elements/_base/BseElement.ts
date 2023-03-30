import { TextElement } from "../TextElement"
import { EventListeners } from "./EventListeners"

export class BaseElement extends EventListeners {
    textContent = ''
    children: (BaseElement|TextElement)[] = []
    classList: string[] = []
    style = { }

    el: HTMLElement | null  = null


    initial(data: Partial<BaseElement>) {
        Object.assign(this, data)
    }

    render(): BaseElement | HTMLElement | Text | null {
        return null
    }

    forceUpdate() {
        if (this.el) {
            if (typeof this.textContent === 'string') {
                this.el.textContent = this.textContent
            }
            // 事件
            this.listeners.forEach((handlers, key) => {
                if (handlers.length) {
                    this.el?.addEventListener(key, (event) => {
                        handlers.forEach(handler => handler(event))
                    })
                }
            })
            // children
            // this.children.forEach(item => {
            //     this.el?.appendChild(item.el)
            // })
        }
    }
}