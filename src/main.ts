import { App } from "../packages/new_vilex/src";
import { WebNativeElement } from "../packages/new_vilex/src/web-native-elements/base/WebNativeElement";
import { UiEditor, UiEditorCreator } from "./examples/UiEditor";



let uiEditor:UiEditor
new App('#app')
  .render(new WebNativeElement({
    children: [
      uiEditor = new UiEditor({
        dataList: [
          UiEditorCreator.createText({
            textContent: '我是文本'
          }),
          UiEditorCreator.createImage({
            src: 'https://upload.jianshu.io/images/js-qrc.png',
            width: 201,
            height: 197,
            objectFit: 'fill'
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
      }),
      new WebNativeElement({
        tagName: 'button',
        textContent: '点击添加一个元素',
        onClick() {
          uiEditor.add(UiEditorCreator.createVideo({
            x: 100,
            y: 100,
            width: 300,
            height: 400,
            src: 'https://imgs-qn.51miz.com/preview/element/00/01/24/06/E-1240643-0374C37E.mp4'
          }))
        }
      })
    ]
  }))