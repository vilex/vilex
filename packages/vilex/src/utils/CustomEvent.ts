type EventName = string | number | symbol
type Listener = (...args: any[]) => void

export class CustomEvent {
  private readonly __events__: Map<EventName, Listener[]> = new Map()

  addEventListener(eventName: EventName, listener: Listener) {
    const __events__ = this.__events__
    let listeners = __events__.get(eventName)
    listeners ? listeners.push(listener) : (listeners = [listener] && listeners && __events__.set(eventName, listeners))
  }

  dispatchEventListener(eventName: EventName, ...args: any[]) {
    const listeners = this.__events__.get(eventName)
    if (listeners) {
      for (let i = listeners.length; i >= 0; i--) {
        listeners[i](...args)
      }
    }
  }

  removeEventListener(eventName: EventName, listener?: Listener) {
    const listeners = this.__events__.get(eventName)
    if (listeners) {
      if (!listener) return (listeners.length = 0)
      for (let i = listeners.length; i >= 0; i--) {
        if (listeners[i] === listener) return listeners.splice(i, 1)
      }
    }
  }
}
