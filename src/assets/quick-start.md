# 快速开始

### 创建一个 Vilex 应用

> 前提条件
>
> - 熟悉命令行工具
> - 已安装 Node.js

在本节中，我们将介绍如何 在本地搭建 Vilex 单页应用。创建项目将使用基于 vite 的构建设置。

确保你已经安装了 Node.js，然后在命令行中运行以下命令：

```shell
npx create-vilex-app vilex-demo
```

> vilex-demo 是我们的目录名，可以随意更改成你所希望的名称

这一指令将会从远程仓库拉取一个基础的 `vilex-template-base` vilex 项目模板，它是 Vilex 官方的项目脚手架工具。

回车执行后，你将会看到如下的打印提示：

```shell
cd vilex-demo
pnpm install
pnpm dev
```

按照上面的提示，分三步分别执行，最后一步你将看到：

```shell
...
xxx http://localhost:3000
...
```

你现在已经成功运行起来了你的第一个 Vilex 项目！打开浏览器，在地址中输入上面提示的 `http://localhost:3000` ，回车后你应该会在页面中看到一些东西，这是模板里默认添加的一个简单的示例。

尝试用你喜欢的编辑编辑器打开此项目并修改一些内容，看看有什么变化。

### 打包

当你准备将应用发布到生产环境时，请运行

```shell
pnpm build
```

此命令会在 `./dist` 文件夹中为你的应用创建一个生产环境的构建版本。

