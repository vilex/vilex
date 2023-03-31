type WatchCallback<T> = (newValue: T, oldValue: T) => void;

export class RefImpl<T> {

    private _value: T
    private _listeners: WatchCallback<T>[] = []

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
            this._listeners.forEach(handler => {
                handler(this._value, _oldValue)
            })
        } 
    }

    watch(callback: WatchCallback<T>) {
        this._listeners.push(callback)
    }

    unWatch(callback: WatchCallback<T>) {
        const index = this._listeners.indexOf(callback)
        if (index >= 0) {
            this._listeners.splice(index, 1)
        }
    }
}