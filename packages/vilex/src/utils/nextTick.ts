type NextTickCallFn = (...args: any) => any
export function nextTick<T extends NextTickCallFn>(callFn: T) {
  setTimeout(() => callFn(), 0)
}
