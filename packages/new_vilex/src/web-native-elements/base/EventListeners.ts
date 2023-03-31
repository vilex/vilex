export class EventListeners {
    listeners:  Map<string, Function[]> = new Map([
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

    set onClick(call: (ev: MouseEvent) => void) {
        call && this.listeners.get('click')?.push(call)
    }
    set onblur(call: (ev: FocusEvent) => void) {
        call && this.listeners.get('blur')?.push(call)
    }
    set onfocus(call: (ev: FocusEvent) => void) {
        call && this.listeners.get('focus')?.push(call)
    }
    set onchange(call: (ev: Event) => void) {
        call && this.listeners.get('focus')?.push(call)
    }
    set onmousedown(call: (ev: MouseEvent) => void) {
        call && this.listeners.get('mousedown')?.push(call)
    }
    set onmousemove(call: (ev: MouseEvent) => void) {
        call && this.listeners.get('mousemove')?.push(call)
    }
    set onmouseup(call: (ev: MouseEvent) => void) {
        call && this.listeners.get('mouseup')?.push(call)
    }
    set onkeydown(call: (ev: KeyboardEvent) => void) {
        call && this.listeners.get('keydown')?.push(call)
    }
    set onkeyup(call: (ev: KeyboardEvent) => void) {
        call && this.listeners.get('keyup')?.push(call)
    } 
    set oninput(call: (ev: InputEvent) => void) {
        call && this.listeners.get('input')?.push(call)
    }
}