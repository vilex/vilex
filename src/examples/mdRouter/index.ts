import { regRoute, routerView } from '../../../packages/vilex-router/src'
import Md from '../../assets/md.md'
import QuickStart from '../../assets/quick-start.md'
import UI from '../../assets/ui.md'
import { md } from '../md'

export const mdRoutes = [
  { title: '快速开始', path: '/d/md', filePath: QuickStart },
  { title: '编写组件', path: '/d/ui', filePath: UI },
  { title: '组件属性', path: '/d/ui', filePath: UI },
  { title: '组件样式', path: '/d/ui', filePath: UI },
  { title: '组件事件', path: '/d/ui', filePath: UI },
  { title: '数据响应', path: '/d/ui', filePath: UI },
  { title: '列表渲染', path: '/d/ui', filePath: UI },
  { title: '路由组件', path: '/d/ui', filePath: UI },
  { title: 'markdown', path: '/d/quick-start', filePath: Md }
]

export const mdRouterView = () => {
  return routerView(
    mdRoutes.map(item => regRoute(item.path, () => md(item.filePath)))
  )
}
