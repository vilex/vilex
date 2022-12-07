import { Location } from 'history'

interface Hooks {
  beforeRoute: HookCallFn
}

type HookCallFn = (from: Location | undefined, to: Location) => Location | Promise<Location>

export const hooks: Partial<Hooks> = {}

export function onBeforeRoute(callFn: HookCallFn) {
  hooks.beforeRoute = callFn
}
