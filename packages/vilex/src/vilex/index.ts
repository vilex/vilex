import { ViElement } from '../vii'

// export * from './store/store'
export * from './dataType/DataFactor'
export * from './store/watch'
export * from './store/ref'
export * from './store/computed'

interface App {
  use: (plugin: { install: (app: ViElement) => void }) => App
  mount: (selector: string) => App
}

export function createApp(app: ViElement): App
export function createApp(app: () => ViElement): App

export function createApp(app: any) {
  typeof app === 'function' && (app = app())

  window.__dev_vilex__app__ = app

  return {
    use(plugin: { install: (app: ViElement) => void }) {
      plugin && typeof plugin.install === 'function' && plugin.install(app as ViElement)
      return this as App
    },
    mount(selector: string) {
      const root = document.querySelector(selector)
      if (root) {
        root.appendChild((app as ViElement).el)
      }
      return this as App
    }
  } as App
}
