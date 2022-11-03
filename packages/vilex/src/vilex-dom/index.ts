import { g } from './g'

export * from './elements'
export * from './listView/listView'

export function ex<T extends () => T>(explain: string, target: T): T {
  g.ex = explain
  return target
}
