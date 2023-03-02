import { createRouter, regRoute, router, routerView } from './../packages/vilex-router/src/index'
import { article, createApp, css, div, header, img, main, createElement } from 'vilex'
import { sidebar } from './examples/sidebar'
import { mdRouterView } from './examples/mdRouter'
import { cg } from './examples/cg'
import Logo from './assets/logo.png'
import Login from './examples/Login'

import RouterAlias from './examples/router/example1'

createApp(RouterAlias).use(createRouter()).mount('#app')
