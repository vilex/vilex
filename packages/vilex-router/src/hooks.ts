import { Location } from 'history'

interface Hooks {
  beforeRoute: HookCallFn
}

type HookCallFn = (from: Location, to: Location) => Location

export const hooks: Partial<Hooks> = {}

export function onBeforeRoute(callFn: HookCallFn) {
  hooks.beforeRoute = callFn
}
