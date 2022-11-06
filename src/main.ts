import {
  regRoute,
  router,
  routerView
} from './../packages/vilex-router/src/index'
import { article, createApp, css, div, header, img, main } from 'vilex'
import { sidebar } from './examples/sidebar'
import { mdRouterView } from './examples/mdRouter'
import { cg } from './examples/cg'

const app = div(
  routerView([
    regRoute('/e/cg', cg),
    regRoute('/d', () => {
      return div(
        header(
          img({
            alt: 'logo',
            src: '...'
          })
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

router.push(`/e/cg`)

createApp(app).mount('#app')
