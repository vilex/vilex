
const Type = <T> () => {
    return null as unknown as T
}

const MouseEventType = Type<MouseEvent>()
const EventType = Type<Event>()
const InputEventType = Type<InputEvent>()
const StringType = Type<string>()
const BooleanValueType = Type<boolean>()
const FunType = Type<() => void>()
export const ConstantEventNameMap = {
    'Click': MouseEventType,
    'MouseDown': MouseEventType,
    'MouseMove': MouseEventType,
    'MouseUp': MouseEventType,
    'MouseEnter': MouseEventType,
    'MouseOver': MouseEventType,
    'MouseOut': MouseEventType,
    'MouseLeave': MouseEventType,
    'Change': EventType,
    'Load': EventType,
    'Input': InputEventType,
}

export const ConstantEventNameArray = Object.keys(ConstantEventNameMap)
export type ConstantEventNameMapType = typeof ConstantEventNameMap

/**
 * Props
 */
export const ConstantPropertKeyMap = {
    id: StringType,
    textContent: StringType,
    type: StringType,
    src: StringType,
    hidden: BooleanValueType,
    contentEditable: BooleanValueType,
    title: StringType,
    value: StringType,
    placeholder: StringType,
}

export const ConstantPropertKeyArray = Object.keys(ConstantPropertKeyMap)
export type ConstantPropertKeyMapType = Partial<typeof ConstantEventNameMap>

/**
 * 
 */
export const ConstantApplyMethodsMap = {
    'blur': FunType,
    'click': FunType,
    'focus': FunType,
}
export const ConstantApplyMethodArray = Object.keys(ConstantApplyMethodsMap)
export type ConstantApplyMethodsMapType = Partial<typeof ConstantApplyMethodsMap>