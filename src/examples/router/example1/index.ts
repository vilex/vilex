import { div } from 'vilex'
import { regRoute, routerView } from '../../../../packages/vilex-router/src'

export default function () {
  return routerView(
    // regRoute(
    //     '/', () => div('/home',
    //         routerView(
    //             regRoute(
    //                 '/home/recommend', () => div('/recommend')
    //             ),
    //             regRoute(
    //                 '/home/center', () => div('/center')
    //             )
    //         )
    //     )
    // ),
    {
      path: '/home',
      alias: '/',
      component: () => div('/h')
    },
    regRoute('/login', () => div('login')),
    regRoute('/iframe', () => div('iframe'))
  )
}
