import {
  a,
  css,
  div,
  h3,
  listView,
  store,
  ViHTMLAnchorElementPart
} from 'vilex'
import { mdRoutes } from '../mdRouter'

const css_sidebar_item = css`
  display: block;
  color: #666;
  font-size: 16px;
  margin-top: 16px;
  text-decoration: none;
  transform-origin: center center;
  &:hover {
    color: #fe4066;
  }
`

export function sidebar() {
  return div(
    h3(
      css`
        font-size: 24px;
        color: rgba(255, 255, 255, 0.8);
      `,
      `...`
    ),
    listView(mdRoutes, item =>
      a(css_sidebar_item, { href: `/#/${item.path}` }, item.title)
    )
  )
}
