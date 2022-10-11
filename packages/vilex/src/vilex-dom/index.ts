import { g } from './g'

export * from './elements'

export function ex<T extends Function>(explain: string, target: T): T {
    g.ex = explain
    return target 
  }