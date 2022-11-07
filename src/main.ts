import {
  regRoute,
  router,
  routerView
} from './../packages/vilex-router/src/index'
import { article, createApp, css, div, header, img, main } from 'vilex'
import { sidebar } from './examples/sidebar'
import { mdRouterView } from './examples/mdRouter'
import { cg } from './examples/cg'
import Logo from './assets/logo.png'

const app = div(
  routerView([
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

router.push(`/d/quick-start`)

createApp(app).mount('#app')
