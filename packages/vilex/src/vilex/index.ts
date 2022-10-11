import { ViElement } from '../vii'

export * from './store/store'
export * from './dataType/DataFactor'


type AppElement = ViElement | (() => ViElement)


interface App {
  use: (plugin: { install: (app: ViElement) => void}) => App
  mount: (selector: string) => App
}

export function createApp(app:AppElement) {
  
  if (typeof app === 'function') {
    app = app()
  }

  // @ts-ignore
  window.__dev_vilex__app__ = app;

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