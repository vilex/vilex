import { ExtendsProtoKeys } from '../../utils/src/extendsProtoKeys'

export function store<T extends object>(target: T) {
  // console.log({...(new EventEmitter())})

  // ExtendsProtoKeys(target, {...new EventEmitter()})
  return new Proxy(target, {
    set(target, p, newValue) {
      return Reflect.set(target, p, newValue)
    }
  })
}
