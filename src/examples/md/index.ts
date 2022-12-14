import { css, div } from 'vilex'
import Markdwon from 'markdown-it'

/* 按你需要导入这两个 一个是解决 浏览器兼容问题 的css，一个是代码区的样式文件 */
import '@corgicoding/theme/dist/normalize.css'
import '@corgicoding/theme/dist/github.css'
/* 主要引入文件 */
import '@corgicoding/theme'

// const mdTheme = css`
//   color: #44425e;
//   h1 {
//     color: #ff3399;
//   }
//   pre {
//     background-color: #f7f7f7;
//   }
//   code {
//     background-color: #f2f2f7;
//   }
// `

const mdUtil = new Markdwon()
export function md(filePath: string) {
  console.log(`md ==> ${filePath}`)
  const v = div(['c-html-render'])
  // const v = div(mdTheme)
  fetch(filePath)
    .then(res => {
      res.text().then(content => {
        v.el.innerHTML = mdUtil.render(content)
      })
    })
    .catch(err => console.error(err))
  return v
}
