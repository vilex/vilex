import { div, ViElement } from 'vilex'
import { createHashHistory } from 'history'

let rootPath = ''

let currentPathStr = ''

let currentMatchedPath: string[] = []

const routeMap: Map<string, Route> = new Map()

const history = createHashHistory()

const location = history.location

history.listen(({ location, action }) => {
  // console.log(action, location)
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

type RouteComponent<T = any> = (...args: T[]) => ViElement

interface RouteParams {
  path: string
  component: RouteComponent
}

interface Route extends RouteParams {
  container: ViElement
  initialed: boolean
}

export function regRoute(
  path: string,
  component: RouteComponent,
  root = false
) {
  if (root) rootPath = path
  return { path, component } as RouteParams
}

export function routerView(routes: RouteParams[], prefix?: string) {
  for (let i = 0; i < routes.length; i++) {
    const val = routeMap.get(routes[i].path)
    if (val) return val.container
  }

  const container = div({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  })

  if (prefix) {
    routes.forEach((route: RouteParams) => (route.path = prefix + route.path))
  }

  routes.forEach((route: RouteParams) => {
    routeMap.set(route.path, { ...route, container, initialed: false })
  })

  return container
}

function onPathChange(path: string) {
  console.log(`path change => ${path}`)
  if (currentPathStr === path) {
    return
  }

  currentPathStr = path

  const matched = matchedPath(path)

  for (let i = 0; i < currentMatchedPath.length; i++) {
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

function renderPathView(path: string, matched: string[]) {
  const len = routeMap.size
  for (let i = 0; i < matched.length; i++) {
    const route = routeMap.get(matched[i])
    if (route && !route.initialed) {
      route.initialed = true
      route.container.clear()
      route.container.add(route.component())
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
