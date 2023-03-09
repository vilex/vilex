import { Location } from 'history'

interface Hooks {
  beforeRoute: HookCallFn
  noMatched: HookNoMatched
}

type HookCallFn = (from: Location | undefined, to: Location) => Location | Promise<Location>
type HookNoMatched = (location: Location) => Location

export const hooks: Partial<Hooks> = {}

export function onBeforeRoute(callFn: HookCallFn) {
  hooks.beforeRoute = callFn
}

export function onNoMatchedRoute(callFun: HookNoMatched) {
  hooks.noMatched = callFun
}
