import { isObject, isSymbol } from '@vilex/utils'
import { isRef } from './store'
export function merge(ori: any, tar: any) {
  if (!ori || !tar) return
  isRef(ori) && !isObject(tar) && (ori.value = tar)

  for (const key in ori) {
    if (isSymbol(key)) continue
    const cur = ori[key]
    const chd = tar[key]
    if (cur === chd) continue
    if (isRef(cur)) {
      cur.value = isRef(chd) ? chd.value : chd
      continue
    }
    if (isObject(cur) && isObject(chd)) {
      merge(cur, chd)
      continue
    }
    ori[key] = tar[key]
  }
}
