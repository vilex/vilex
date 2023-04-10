export const ConstantEventNameMap = {
    'Click': null as unknown as MouseEvent,
    'MouseDown': null as unknown as MouseEvent,
    'MouseMove': null as unknown as MouseEvent,
    'MouseUp': null as unknown as MouseEvent,
    'MouseEnter': null as unknown as MouseEvent,
    'MouseOver': null as unknown as MouseEvent,
    'MouseOut': null as unknown as MouseEvent,
    'MouseLeave': null as unknown as MouseEvent,
    'Change': null as unknown as Event,
    'Load': null as unknown as Event,
    'Input': null as unknown as InputEvent,
}

export const ConstantEventNameArray = Object.keys(ConstantEventNameMap)
export type ConstantEventNameMapType = typeof ConstantEventNameMap

document.onclick = e => {
    e.target
}