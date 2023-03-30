export class BaseElement {
    initial(data: Partial<BaseElement>) {
        Object.assign(this, data)
    }
}