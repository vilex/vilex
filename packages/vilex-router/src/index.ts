import { div, ViElement, ViHTMLDivElement } from 'vilex'
import { createHashHistory } from 'history'
import { isPromise } from './isPromise'

let rootPath = ''

let currentPathStr = ''

let currentMatchedPath: string[] = []

const routeMap = new Map()

const history = createHashHistory()

const location = history.location

history.listen(({ location }) => {
  if (location.pathname === '/') {
    onPathChange(rootPath)
  } else {
    onPathChange(location.pathname)
  }
})

export const router = history

export function createRouter() {
  return {
    install() {
      history.replace(location.pathname)
    }
  }
}

interface RegRoute<T> {
  path: string
  component: () => T
}

type Call<T> = () => T

export function regRoute(path: string, component: Call<ViElement>, root?: boolean): RegRoute<ViElement>
export function regRoute(path: string, component: Call<Promise<ViElement>>, root: boolean): RegRoute<Promise<ViElement>>
export function regRoute<T>(path: string, component: T, root = false) {
  if (root) rootPath = path
  return { path, component } as RegRoute<T>
}

export function routerView<T>(routes: RegRoute<T>[], prefix?: string): ViHTMLDivElement {
  for (let i = routes.length - 1; i >= 0; i--) {
    const val = routeMap.get(routes[i].path)
    if (val) return val.container
  }

  const container = div({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  })

  if (prefix) {
    routes.forEach(route => (route.path = prefix + route.path))
  }

  routes.forEach(route => {
    routeMap.set(route.path, { ...route, container, initialed: false })
  })

  return container
}

function onPathChange(path: string) {
  if (currentPathStr === path) {
    return
  }

  currentPathStr = path

  const matched = matchedPath(path)

  for (let i = currentMatchedPath.length - 1; i >= 0; i--) {
    const path = currentMatchedPath[i]
    if (!matched.includes(path)) {
      const route = routeMap.get(path)
      if (route) {
        route.initialed = false
        route.container.clear()
      }
    }
  }

  renderPathView(path, matched)

  currentMatchedPath = matchedPath(path)
}

async function renderPathView(path: string, matched: string[]) {
  const len = routeMap.size
  for (let i = 0; i < matched.length; i++) {
    const route = routeMap.get(matched[i])
    if (route && !route.initialed) {
      route.initialed = true
      route.container.clear()
      const c = route.component()
      if (isPromise(c)) {
        const _promiseChild = await (c as Promise<ViElement>)
        route.container.add(_promiseChild)
      } else {
        const _cpt = c as ViElement
        route.container.add(_cpt)
      }
      if (routeMap.size != len) {
        renderPathView(path, matchedPath(path))
      }
    }
  }
}

function matchedPath(path: string) {
  return Array.from(routeMap.keys())
    .filter(key => path.includes(key))
    .sort((a: string, b: string) => a.length - b.length)
}
