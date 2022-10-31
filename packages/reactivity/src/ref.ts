import { reactive } from './reative'
class RefImpl {
  public _value
  public dep = new Set()
  constructor(public rawValue, public _shallow) {
    this._value = _shallow ? rawValue : reactive(rawValue)
  }

  get value() {
    return this._value
  }

  set value(newValue) {
    this._value = newValue
  }
}

export function ref(value) {
  return new RefImpl(value, false)
}

export function shallowRef(value) {
  return new RefImpl(value, true)
}
