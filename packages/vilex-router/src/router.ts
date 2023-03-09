import { defineComponent, ViElement, ViHTMLDivElement } from 'vilex'
import { createHashHistory, Location } from 'history'
import { isPromise } from './isPromise'
import { error } from './log'
import { defaultContainer } from './RouterView'
import { hooks } from './hooks'
import { createLocationOf } from './location'

let currentLocation: Location

let currentMatchedPath: string[] = []

const routeMap = new Map()
const alias: Map<string, string> = new Map()

const history = createHashHistory()

const location = history.location

// 是不是已经初始化完成
let isInitialRouter = false

history.listen(({ location }) => {
  if (isInitialRouter) {
    onPathChange(location)
    // const pathname = alias.get(location.pathname) || location.pathname
    // const r = routeMap.get(pathname)
    // if (r) {
    //   if (r.redirect) {
    //     router.push(r.redirect)
    //   } else {
    //     onPathChange(location)
    //   }
    // } else {
    //   hooks.noMatched && hooks.noMatched(location)
    // }
  }
})

export const router = history

export function createRouter() {
  return {
    install() {
      setTimeout(() => {
        isInitialRouter = true
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
    routeMap.set(route.path, { ...route, container: root, initialed: false })
    route.alias && alias.set(route.alias, route.path)
  })
  return root
}

interface RegRoute<T> {
  path: string
  alias?: string
  redirect?: string
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

async function onPathChange(location: Location) {
  if (currentLocation && currentLocation.pathname === location.pathname) return
  const currentPathname = location.pathname
  currentLocation = hooks.beforeRoute ? await hooks.beforeRoute(currentLocation, createLocationOf(location)) : location
  currentLocation.pathname != currentPathname && history.push(currentLocation.pathname)
  const pathname = currentLocation.pathname
  const currPath = alias.get(pathname) || pathname
  // if (!route) {
  //   hooks.noMatched && hooks.noMatched(currPath)
  //   return
  // }

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

  const route = routeMap.get(currPath)
  if (!route) {
    hooks.noMatched && hooks.noMatched(currPath)
    return
  }
  if (route.redirect) {
    router.replace(route.redirect)
  }
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
