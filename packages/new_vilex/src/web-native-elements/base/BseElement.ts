// import { Simple, SimpleRef, StringOrNumber, WritableKeys } from "../../common-types"
// import { VilexElement } from "../../custom-web-components/VilexElement"
// import { unRef } from "../../web-spa-runtime/reactivity/ref/ref"
// import { RefImpl } from "../../web-spa-runtime/reactivity/ref/RefImpl"
// import { TextElement } from "../elements/TextElement"
// import { ElementEvent } from "./ElementEvent"
// import { EventManager } from "./EventManager"


// export class BaseElement extends ElementEvent {
//     textContent: StringOrNumber = ''
//     children: (BaseElement | TextElement | VilexElement)[] = []
//     classList: string[] = []
//     style: Record<string, SimpleRef> = {}

//     el: HTMLElement | undefined

//     private _eventManager: EventManager | undefined

//     constructor() {
//         super();
//         this.addRenderKey('textContent', 'textContent')
//         // this.addRenderKey('style/*', 'style/*')
//     }

//     initial(data: Partial<BaseElement>) {
//         Object.assign(this, data)

//         this._umap.forEach(
//             (thisKey, elementKey) => {
//                 const value = this[thisKey as 'textContent']
//                 if (value instanceof RefImpl) {
//                     value.watch(() => {
//                         this.updateOneProps(elementKey, thisKey)
//                     })
//                 }
//             }
//         )

//         Object.keys(this.style).forEach(styleKey => {
//             const value = this.style[styleKey]
//             if (value instanceof RefImpl) {
//                 value.watch(() => {
//                     this.updateOneStyle(styleKey, styleKey)
//                 })
//             }
//         })
//     }

//     render(): BaseElement | HTMLElement | Text | null {
//         return null
//     }

//     forceUpdate() {
//         const _el = this.el
//         if (_el) {

//             if (!this._eventManager) {
//                 this._eventManager = new EventManager(_el)
//             }

//             this._umap.forEach((thisKey, elementKey) => {
//                 this.updateOneProps(elementKey, thisKey)
//             })

//             const em = this._eventManager
//             if (em) {
//                 this.listeners.forEach((handlers, key) => {
//                     if (handlers.length) {
//                         if (!em.hasEventListener(key)) {
//                             em.addEventListener(key, event => {
//                                 handlers.forEach(handler => handler(event))
//                             })
//                         }
//                     } else {
//                         em.removeEventListeners(key)
//                     }
//                 })
//             }


//             this.updateClassList()
//             this.updateStyles()
//         }
//     }

//     private _umap: Map<string, string> = new Map()

//     addRenderKey(elementKey: string, thisKey: string) {
//         this._umap.set(elementKey, thisKey)
//     }

//     updateOneProps(elementKey: string, thisKey: string) {
//         if (this.el) {
//             this.el[elementKey as 'textContent'] = unRef(this[thisKey as 'textContent']) + ''
//         }
//     }

//     updateClassList() {
//         if (this.el) {
//             const _classList = this.el.classList
//             _classList.remove(..._classList.values())
//             _classList.add(...this.classList)
//         }
//     }

//     updateOneStyle(elementKey: string, thisKey: string) {
//         if (this.el) {
//             this.el.style[elementKey as 'width'] = unRef(this.style[thisKey]) + ''
//         }
//     }

//     updateStyles() {
//         if (this.el) {
//             Object.keys(this.style).forEach(styleKey => {
//                 this.updateOneStyle(styleKey, styleKey)
//             })
//         }
//     }
// }

export class BaseElement {}