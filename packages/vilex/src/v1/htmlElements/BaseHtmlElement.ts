import { ElementEvent } from './ElementEvent';

export class BaseHtmlElement extends ElementEvent {

    textContent = ''

    constructor(data: Partial<BaseHtmlElement>) {
        super()
        super.initial(data)
    }

    render(): HTMLElement | null {
        return null
    }
}