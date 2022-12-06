// import { customNode } from './../dom/createElement'
import { isFun } from '../../utils/isFun'
import { ViElement } from '../../vii'
import { appConf } from '../../vilex/app'

type CallFn = (...args: any[]) => any

/** The root sub element should preferably use div or a variant of div  */
export function defineComponent<T extends CallFn>(callFn: T): T
/** hrmId: Unique not repeated */
export function defineComponent<T>(id: string, callFn: T): T
export function defineComponent(...args: any[]) {
  const first = args[0]
  const isHmr = typeof first === 'string'
  const compArgs = isHmr ? args.slice(1) : args
  const getDefineComponentName = isHmr ? first.split('#')[1] || first : ''
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
    BeUsedForDebuggerComponentAttributeName(node, getDefineComponentName)
    // return appConf.disableCustomComponent ? node : getDefineComponentName ? customNode(getDefineComponentName, node) : node
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

const BeUsedForDebuggerComponentAttributeName = (node: ViElement, componentName: string) => {
  componentName && !appConf.disableCustomComponentAttribute && node.set('v-component-name', componentName)
}
