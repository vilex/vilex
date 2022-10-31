import { createElement } from '@vilex/runtime-dom'
import mitt from 'mitt'

const mitter = mitt()

const deps = new Map()

function useContext<T extends object>(target: T): T {
  const ctx = new Proxy(target, {
    get(target, p) {
      console.trace(`get`, target, p)
      console.log(this)
      return Reflect.get(target, p)
    },
    set(target, p, newValue) {
      console.log(`set`, target, p, newValue)
      mitter.emit(`set`, { target, p, newValue })
      return Reflect.set(target, p, newValue)
    }
  })

  return ctx
}

let currentElement

// create 的时候收集依赖
function _create(tag, label: string) {
  currentElement = createElement(tag, label)
  return currentElement
}

const ctx = useContext({
  name: 'hello world'
})

const btn1 = _create('button', ctx.name)
const btn2 = _create('button', ctx.name)

const root = document.querySelector('#app')
if (root) {
  root.appendChild(btn1)
  root.appendChild(btn2)

  mitter.on(`set`, data => {
    console.log(deps)
  })
}

// 监听

btn1.onclick = () => {
  ctx.name = Math.random().toString()
}
