import { RefMonitor } from "./RefMonitor"

export class RefImpl<T> {

    private _value: T
    monitor = new RefMonitor<T>()

    constructor(value: T) {
        this._value = value
    }

    get value() {
        return this._value
    }

    set value(value) {
        if (this._value !== value) {
            const _oldValue = this._value
            this._value = value
            this.monitor.fire(this._value, _oldValue)
        } 
    }

}