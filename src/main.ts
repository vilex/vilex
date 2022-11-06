import { router } from './../packages/vilex-router/src/index'
import { article, createApp, css, div, header, img, main } from 'vilex'
import { sidebar } from './examples/sidebar'
import { mdRouterView } from './examples/mdRouter'

const app = div(
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

router.push(`/d/quick-start`)

createApp(app).mount('#app')
