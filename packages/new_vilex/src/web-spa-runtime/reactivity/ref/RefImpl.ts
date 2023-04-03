import { Monitor } from "../utils/Monitor";

type WatchCallback<T> = (newValue: T, oldValue: T) => void;

export class RefImpl<T> {

    private _value: T
    private _monitor = new Monitor<T>()

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
            this._monitor.fireChanges(this._value, _oldValue)
        } 
    }

    watch(callback: WatchCallback<T>) {
        this._monitor.onChange(callback)
    }
}