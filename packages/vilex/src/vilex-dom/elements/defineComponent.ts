import { isFun } from '../../utils/isFun'

export function defineComponent<T>(callFnOrElement: T): T
/** hrmId: Unique not repeated */
export function defineComponent<T>(id: string, callFnOrElement: T): T
export function defineComponent(...args: any[]) {
  const first = args[0]
  const isHmr = typeof first === 'string'
  const compArgs = isHmr ? args.slice(1) : args
  const callOrEl = compArgs[0]
  if (!isFun(callOrEl)) {
    isHmr && (callOrEl.hmrId = first)
    return callOrEl
  }
  return (...props: any[]) => {
    const node = callOrEl(...props)
    if (isHmr) {
      node.hmrId = first
      RegisterDevHotModuleReplaceRegisterArguments(first, props)
    }
    return node
  }
}

const RegisterDevHotModuleReplaceRegisterArguments = (id: string, args: any[]) => {
  try {
    if (import.meta.env.DEV) {
      window.HmrManager.setArguments(id, args)
    }
  } catch (err) {}
}
