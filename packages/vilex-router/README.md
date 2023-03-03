```typescript
import { createRouter, router } from 'vilex-router'
import { div, button, createApp } from 'vilex'
import { customRouterView, regRoute, routerView } from 'vilex-router'

function App() {
  return div(
    routerView(
      regRoute('/', () => div('/ route content')),
      regRoute('/default-1', () => div('default-1 route content')),
      regRoute('/default-2', () => div('default-2 route content'))
    ),
    customRouterView(
      () => div({ height: '200px' }),
      regRoute('/custom-1', () => div('custom-1 route content')),
      regRoute('/custom-2', () => div('custom-2 route content'))
    ),
    div(
      ['default-1', 'default-2', 'custom-1', 'custom-2'].map((item) =>
        button(`to ${item}`, {
          onclick() {
            router.push(`/${item}`)
          },
        })
      )
    )
  )
}

createApp(App).use(createRouter()).mount('#app')

```

document: https://vilex.github.io
