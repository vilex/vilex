# 编写组件

我们在编写 `html` 的时候，会用到各种各样的标签。比如下面这样：

```html
<div>
  <p>text content</p>
  <button>button</button>
</div>
```

在 `vilex` 的开发中，我们使用 `Typescript` (推荐) 来开发，所以提供了一个用来创建这些标签函数接口：`createElement` 。下面的示例来演示它的用法：

```typescript
const div = createElement('div')
```

`vilex` 提供的 `createElement` 和 `document.createElement` 都会创建出一个节点元素。

现在我们已经创建出一个 `div` ，但它并不会直的显示到我们的页面中，为什么呢？是因为我们创建的这个 `div` 还没有添加到 `html` 的 dom 树中，下面我们就把它添加到某个 `dom 节点` 中吧

```typescript
createApp(div).mount('body')
```

使用 `vilex` 提供的 `createApp` 方法接收一个节点元素并通过 `.mount` 将此元素挂载到了 `body` 上，这个也可以挂载到其它节点元素上，如 `#app` 一个 `id='app'` 的节点元素。 



只添加一个 `div` 对我们开发页面没什么用，我们想要的是和前面那一段 `html` 类似的，要包含多个元素来填充我们的页面，回归到这个 `div` 上，我想在 `div` 里面放一个文字，再放一个按钮，我们来重头完成这个需求。

```typescript
createElement('div', [
  createElement('p', `text content`),
  createElement('button', `button`)
])
```

可以看到 `createElement` 的第二个参数，可以是一个数组，也可以是一个字符串。如果是字符串的话，默认会被 `vilex` 识别成一个 dom 元素节点的 [textContent](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent) 。如果是数组的话，默认会被识别成它的子元素。这样我们便完成了链接了父子组件。

我猜你可能还发现了一个问题，就是我们一直写 `createElement` 很麻烦对不对，这是也是我遇到的问题，所以 `vilex` 中又提供对这些基础标签组件的一个简单的封装，可以直接从 `vilex` 中导入 `div`、`button`、`input`、`a`......等，我们常用到的标签都可以通过这种方式来使用。下面来演示一下效果：

```typescript
div(
	p('text content'),
  button('button')
)
```

虽然底层逻辑是一样的，不过这样确实可以帮助我们在开发中看着比较清爽，写起来也能提高一些开发效率。