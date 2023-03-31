export class EventManager {

    private _list: Map<string, ((ev: Event) => void)[]> = new Map()
    private _el: HTMLElement


    constructor(element: HTMLElement) {
        this._el = element
    }


    addEventListener<T extends ((ev: Event) => void)>(key: string, handler: T) {
        const list = this._list.get(key)
        if (!list) {
            this._list.set(key, [handler])
        } else {
            list.push(handler)
        }
        this._el.addEventListener(key, handler)
    }

    hasEventListener(key: string) {
        return this._list.has(key)
    }

    removeEventListeners( key: string) {
        const list = this._list.get(key)
        if (list) {
            list.forEach(call => this._el.removeEventListener(key, call))
            this._list.delete(key)
        }
    }
}