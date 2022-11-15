import { tryGetValue } from '../../utils/tryGetValue'
import { validAttribute } from '../../utils/validAttribute'
import { ViElement } from '../../vii'
import { EmitType } from '../../vilex/constant/EmitType'
import { VNode } from '../vn'

export function messageProcessing(
  eventType: string | number,
  vn: VNode,
  ...args: any[]
) {
  // @ts-ignore
  messages[eventType]?.(vn, ...args)
}

const messages = {
  [EmitType.Clear]: Clear,
  [EmitType.RemoveChild]: RemoveChild,
  [EmitType.AppendChild]: AppendChild,
  [EmitType.InsertChild]: InsertChild,
  [EmitType.UpdateText]: UpdateText,
  [EmitType.UpdateClass]: UpdateClass,
  [EmitType.UpdateStyle]: UpdateStyle,
  [EmitType.UpdateProps]: UpdateProps,
  [EmitType.Event]: EventHandler
}

function Clear(n: ViElement, t: EmitType, k: string, v: any) {
  n.el.innerHTML = ''
}

function RemoveChild(n: ViElement, child: ViElement) {
  n.el.removeChild(child.el)
}

function AppendChild(n: VNode, chils: ViElement[]) {
  const f = document.createDocumentFragment()
  chils.forEach(c => f.appendChild(c.el))
  n.el.appendChild(f)
}

function InsertChild(n: VNode, child: ViElement, beforeChild: ViElement) {
  n.el.insertBefore(child.el, beforeChild.el)
}

function UpdateText(n: VNode, k: string, value: string) {
  n.el.textContent = tryGetValue(value)
}

export function UpdateClass(vn: VNode, k: string, v: any) {
  const dataModel = vn.$
  const el = vn.el as HTMLElement
  if (dataModel.type !== 'text') {
    if (tryGetValue(v)) {
      if (!el.classList.contains(k)) {
        el.classList.add(k)
      }
    } else {
      if (el.classList.contains(k)) {
        el.classList.remove(k)
      }
    }
  }
}

function UpdateStyle(n: VNode, k: string, v: any) {
  const el = n.el as HTMLElement
  // @ts-ignore
  el.style[k] = tryGetValue(v)
}

function UpdateProps(n: VNode, k: string, v: any) {
  if (validAttribute(k)) {
    const val = tryGetValue(v)
    // @ts-ignore
    ;(n.el as HTMLElement).setAttribute(k, val)
    // @ts-ignore
    ;(n.el as HTMLElement)[k] = val
  }
}

function EventHandler(n: VNode, k: string | number, v: any) {
  const el = n.el as HTMLElement
  if (typeof v === 'function') {
    // @ts-ignore
    el[k] = (ev: any) => v({ vn: n, ev })
  } else {
    // @ts-ignore
    el[k] = null
  }
}
