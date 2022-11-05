import {
  a,
  article,
  createApp,
  css,
  div,
  header,
  img,
  li,
  listView,
  main,
  nav,
  store,
  ul
} from 'vilex'
import { md } from './examples/md'
import { Todo } from './examples/todo'
import mdmd from './assets/md.md'

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
    nav(listView(store(['todo', 'md']), item => div(item))),
    article(md(mdmd))
  )
)

createApp(app).mount('#app')
