import { regRoute, routerView } from '../../../packages/vilex-router/src'
import Md from '../../assets/md.md'
import QuickStart from '../../assets/quick-start.md'
import UI from '../../assets/ui.md'
import { md } from '../md'
import Component from '../../assets/component.md'
import Props from '../../assets/props.md'
import Style from '../../assets/style.md'
import Events from '../../assets/events.md'
import Reactivity from '../../assets/reactivity.md'
import List from '../../assets/render-list.md'
import Router from '../../assets/router.md'

export const mdRoutes = [
  { title: '快速开始', path: '/d/quick-start', filePath: QuickStart },
  { title: '编写组件', path: '/d/ui', filePath: Component },
  { title: '组件属性', path: '/d/props', filePath: Props },
  { title: '组件样式', path: '/d/style', filePath: Style },
  { title: '组件事件', path: '/d/events', filePath: Events },
  { title: '数据响应', path: '/d/reactivity', filePath: Reactivity },
  { title: '列表渲染', path: '/d/render-list', filePath: List },
  { title: '路由组件', path: '/d/routr', filePath: Router },
  { title: 'markdown', path: '/d/markdown', filePath: Md }
]

export const mdRouterView = () => {
  return routerView(
    mdRoutes.map(item => regRoute(item.path, () => md(item.filePath)))
  )
}
