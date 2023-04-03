
type WatchCallback = (key: string | symbol, newValue: any, oldValue: any) => void;
type DeleteCallback = (deleteKey: string) => void

export class Monitor {

    private _changeHandlers: WatchCallback[] = []
    private _deleteHandlers: DeleteCallback[] = []

    onChange(callback: WatchCallback) {
        this._changeHandlers.push(callback)
    }

    unChange(callback: WatchCallback) {
        this._unHandler(this._changeHandlers, callback)
    }

    onDelete(callback: DeleteCallback) {
        this._deleteHandlers.push(callback)
    }

    unDelete(callback: DeleteCallback) {
        this._unHandler(this._deleteHandlers, callback)
    }

    fireChanges(key: string, newValue:any, oldValue: any) {
        this._changeHandlers.forEach(call => call(key, newValue, oldValue))
    }

    fireDeletes(deleteKey: string) {
        this._deleteHandlers.forEach(call => call(deleteKey))
    }

    private _unHandler<T extends any[], C extends Function>(handlers: T, callback: C) {
        const index = handlers.indexOf(callback)
        if (index >= 0) {
            handlers.splice(index, 1)
        }
    }
}