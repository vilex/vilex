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
        const _el = this.el
        if (_el) {
            if (typeof this.textContent === 'string') {
                _el.textContent = this.textContent
            }
            
            this.listeners.forEach((handlers, key) => {
                if (handlers.length) {
                    if (!this.hasEventListener(_el, key)) {
                        this.addEventListener(_el, key, event => {
                            handlers.forEach(handler => handler(event))
                        })
                    }
                } else {
                    this.removeEventListeners(_el, key)
                }
            })
            
            const _classList = _el.classList
            _classList.remove(..._classList.values())
            _classList.add(...this.classList)

        }
    }

    private eventList: Map<string, ((ev: Event) => void)[]> = new Map()
    
    private addEventListener<T extends ((ev: Event) => void)>(el: HTMLElement, key: string, handler: T) {
        const list = this.eventList.get(key)
        if (!list) {
            this.eventList.set(key, [handler])
        } else {
            list.push(handler)
        }
        el.addEventListener(key, handler)
    }

    private hasEventListener(el: HTMLElement, key: string) {
        return this.eventList.has(key)
    }

    private removeEventListeners(el: HTMLElement, key: string) {
        const list = this.eventList.get(key)
        if (list) {
            list.forEach(call => el.removeEventListener(key, call))
            this.eventList.delete(key)
        }
    }
}