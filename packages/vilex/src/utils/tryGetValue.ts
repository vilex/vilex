import { isProxy } from "./isProxy";

export function tryGetValue(v: any) {
  if (isProxy(v)) {
    return v.value
  }
  return v
}