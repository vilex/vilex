import { App } from "../packages/new_vilex/src";
import { UiEditor } from "./examples/UiEditor";

new App('#app')
  .render(new UiEditor({
    dataList: [
      {type: 'img'}
      // 文本
      // 图片
      // 视频
      // 形状
      // 音频
      // svg
    ]
  }))