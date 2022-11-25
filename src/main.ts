import {
  regRoute,
  router,
  routerView
} from './../packages/vilex-router/src/index'
import {
  article,
  createApp,
  css,
  div,
  header,
  img,
  main,
  createElement
} from 'vilex'
import { sidebar } from './examples/sidebar'
import { mdRouterView } from './examples/mdRouter'
import { cg } from './examples/cg'
import Logo from './assets/logo.png'
import Login from './examples/Login'

const app = div(
  routerView([
    regRoute('/t/1', () => Login),
    regRoute('/e/cg', cg),
    regRoute('/d', () => {
      return div(
        header(
          css`
            padding: 4vmin 10vmin;
          `,
          img(
            {
              alt: 'logo',
              src: Logo
            },
            css`
              width: auto;
              height: 16px;
            `
          )
        ),
        main(
          css`
            display: grid;
            grid-template-columns: 2fr 10fr;
            margin: 1vmin 10vmin;
          `,
          sidebar(),
          article(mdRouterView())
        )
      )
    })
  ])
)

router.push(`/t/1`)

createApp(app).mount('#app')
