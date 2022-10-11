```typescript
import { div, p, button, createApp } from 'vilex';
import { createRouter, regRoute, router, routerView } from 'vilex-router'

const app = function App() {
  return div(
    [
      div(
        ['/home', '/about', '/home/left', '/home/right'].map(
          label => button(
            'jump to ' + label,
            {
              onclick() {
                router.push(label)
              }
            }
          )
        )
      ),
      div(
        routerView([
          regRoute('/home', () => {
            return div(
              [
                p('home view'),
                routerView([
                  regRoute('/home/left', () => div('home left view')),
                  regRoute('/home/right', () => div('home right view'))
                ])
              ]
            ) 
          }),
          regRoute('/about', () => div('about view'))
        ])
      )
    ]
  )
}

createApp(app).use(createRouter()).mount('#app')
```

