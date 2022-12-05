import { defineComponent, ViElement, ViHTMLDivElement } from 'vilex'
import { createHashHistory, Location } from 'history'
import { isPromise } from './isPromise'
import { error } from './log'
import { defaultContainer } from './RouterView'
import { hooks } from './hooks'

let currentLocation: Location

let currentMatchedPath: string[] = []

const routeMap = new Map()
const alias: Map<string, string> = new Map()

const history = createHashHistory()

const location = history.location

history.listen(({ location }) => {
  onPathChange(location)
})

export const router = history

export function createRouter() {
  return {
    install() {
      setTimeout(() => {
        history.replace(location.pathname)
      }, 0)
    }
  }
}

function getPathContainer<T>(routes: RegRoute<T>[]) {
  for (let i = routes.length - 1; i >= 0; i--) {
    const route = routes[i]
    const val = routeMap.get(route.path)
    if (val) {
      error(route.path, `already exists, please change it`)
      return val.container as ViHTMLDivElement
    }
  }
  return null
}

function createRouterView<Root, T>(creator: () => Root, routes: RegRoute<T>[]) {
  let root = getPathContainer(routes) as Root
  if (root) return root
  root = creator()
  routes.forEach(route => {
    routeMap.set(route.alias || route.path, { ...route, container: root, initialed: false })
    route.alias && alias.set(route.path, route.alias)
  })
  return root
}

interface RegRoute<T> {
  path: string
  alias?: string
  component: () => T
}

type Call<T> = () => T

export function regRoute<T>(path: string, component: Call<T>): RegRoute<T>
export function regRoute<T>(path: string, component: Call<Promise<T>>, root: boolean): RegRoute<Promise<T>>
export function regRoute<T>(path: string, component: T) {
  const alias = path === '/' ? '/_default_' : ''
  return { path, component, alias } as RegRoute<T>
}

export function routerView<T>(...routes: RegRoute<T>[]): T {
  return createRouterView(defineComponent('router-view', defaultContainer) as () => T, routes)
}

export function customRouterView<T>(customContainer: () => T, ...routes: RegRoute<T>[]): T {
  return createRouterView(defineComponent('router-view', customContainer), routes)
}

function onPathChange(location: Location) {
  if (currentLocation && currentLocation.pathname === location.pathname) return

  currentLocation = hooks.beforeRoute ? hooks.beforeRoute(currentLocation, location) : location

  const pathname = currentLocation.pathname
  const currPath = alias.get(pathname) || pathname

  const matched = matchedPath(currPath)

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

  renderPathView(currPath, matched)

  currentMatchedPath = matchedPath(currPath)
}

async function renderPathView(path: string, matched: string[]) {
  const len = routeMap.size
  for (let i = 0; i < matched.length; i++) {
    const route = routeMap.get(matched[i])
    if (route && !route.initialed) {
      route.initialed = true
      const container = route.container
      container.clear()
      const c = route.component(currentLocation.state)
      const content = isPromise(c) ? await (c as Promise<ViElement>) : (c as ViElement)
      container.add(content)

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
