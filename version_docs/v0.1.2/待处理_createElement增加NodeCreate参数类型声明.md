问题描述：


使用以下代码，使用 vscode 编写代码时，以下代码提示错误但程序运行正常：

```typescript
const Button = createElement('button', css`padding: 8px 14px;`)
// 下面这一行, createElement 方法第一个参数类型不匹配：
// 类型“NodeCreator”的参数不能赋给类型“keyof HTMLElementTagNameMap”的参数
const MyButton = createElement(Button, css`color: green;`)
```

期望结果：

createElement增加NodeCreate参数类型声明