import { ViElement } from '../vii'

interface Plugin {
  install: (app: App) => void
}
interface AppConf {
  disableCustomComponent: boolean
  disableCustomComponentAttribute: boolean
}
type AppRenderer = () => ViElement
export type App = vApp

export let app: App

class vApp {
  plugins: Plugin[] = []
  config: Partial<AppConf> = {}
  _renderer: AppRenderer
  constructor(renderer: AppRenderer) {
    this._renderer = renderer
  }
  use(plugin: Plugin) {
    plugin.install(this)
    this.plugins.push(plugin)
    return this
  }
  mount(selector: string) {
    const root = document.querySelector(selector)
    if (root && typeof this._renderer === 'function') {
      const newApp = this._renderer()
      window.__dev_vilex__app__ = newApp
      root.appendChild(newApp.el)
    }
    return this
  }
}

export function createApp(appRenderer: AppRenderer) {
  return (app = new vApp(appRenderer))
}

export const appConf: Partial<AppConf> = {}
export function configurApp(conf: Partial<AppConf>) {
  return Object.assign(appConf, conf) as Partial<AppConf>
}
