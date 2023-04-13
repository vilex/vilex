import { App } from "../packages/new_vilex/src";
import { UiEditor, UiEditorCreator } from "./examples/UiEditor";

new App('#app')
  .render(new UiEditor({
    dataList: [
      UiEditorCreator.createText({
        textContent: '我是文本'
      }),
      UiEditorCreator.createImage({
        src: 'https://upload.jianshu.io/images/js-qrc.png'
      }),
      UiEditorCreator.createText({
        textContent: '我是文本'
      }),
      UiEditorCreator.createText({
        textContent: '我是文本'
      })
      // 文本
      // 图片
      // 视频
      // 形状
      // 音频
      // svg
    ]
  }))