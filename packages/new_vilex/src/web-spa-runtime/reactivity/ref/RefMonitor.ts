type WatchCallback<T> = (newValue: T, oldValue: T) => void

export class RefMonitor<T> {
  private watchCallbacks: WatchCallback<T>[] = []
  fire(newValue: T, oldValue: T) {
    if (newValue != oldValue) {
      this.watchCallbacks.forEach(callback => {
        callback(newValue, oldValue)
      })
    }
  }
  watch(watchCallback: WatchCallback<T>) {
    this.watchCallbacks.push(watchCallback)
  }
  unWatch(watchCallback: WatchCallback<T>) {
    const index = this.watchCallbacks.indexOf(watchCallback)
    if (index >= 0) {
      this.watchCallbacks.splice(index, 1)
    }
  }
}