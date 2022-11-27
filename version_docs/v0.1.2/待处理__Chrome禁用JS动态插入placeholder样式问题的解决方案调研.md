问题描述：

当使用 JS 动态插入带有 placeholder 样式时，浏览器报错，代码如下

```typescript
const cssRule = `
.btn { color: white }
.btn::placeholder { color: red }
`
document.styleSheets[0].insertRule(cssRule)
```

期望结果：

寻找出一个可以动态添加 placeholder 样式的解决方案