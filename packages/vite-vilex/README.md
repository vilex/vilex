# vite-vilex



为 vilex 提供开发环境下的 hmr 功能。



### 安装

```shell
pnpm add vite-vilex@latest -D
```



### 如何使用

在 vite.config.js 中

```javascript
import vilex from 'vite-vilex'

export default {
  plugins: [ vilex() ]
}
```

