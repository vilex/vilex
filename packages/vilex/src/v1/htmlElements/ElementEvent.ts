import { BaseElement } from './../BaseElement';


export class ElementEvent extends BaseElement {
    eventListeners:  Map<string, Function[]> = new Map([
        ['click', []],
        ['blur', []],
        ['focus', []],
        ['change', []],
        ['mousedown', []],
        ['mousemove', []],
        ['mouseup', []],
        ['keydown', []],
        ['keyup', []],
        ['input', []],
    ])

    set onclick(call: (ev: MouseEvent) => void) {
        call && this.eventListeners.get('click')?.push(call)
    }
    set onblur(call: (ev: FocusEvent) => void) {
        call && this.eventListeners.get('blur')?.push(call)
    }
    set onfocus(call: (ev: FocusEvent) => void) {
        call && this.eventListeners.get('focus')?.push(call)
    }
    set onchange(call: (ev: Event) => void) {
        call && this.eventListeners.get('focus')?.push(call)
    }
    set onmousedown(call: (ev: MouseEvent) => void) {
        call && this.eventListeners.get('mousedown')?.push(call)
    }
    set onmousemove(call: (ev: MouseEvent) => void) {
        call && this.eventListeners.get('mousemove')?.push(call)
    }
    set onmouseup(call: (ev: MouseEvent) => void) {
        call && this.eventListeners.get('mouseup')?.push(call)
    }
    set onkeydown(call: (ev: KeyboardEvent) => void) {
        call && this.eventListeners.get('keydown')?.push(call)
    }
    set onkeyup(call: (ev: KeyboardEvent) => void) {
        call && this.eventListeners.get('keyup')?.push(call)
    } 
    set oninput(call: (ev: InputEvent) => void) {
        call && this.eventListeners.get('input')?.push(call)
    }
}

