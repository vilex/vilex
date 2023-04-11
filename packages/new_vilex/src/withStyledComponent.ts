import { WebNativeElement, WebNativeElementParams } from "./web-native-elements/base/WebNativeElement";

type ReturnType = (data: WebNativeElementParams) => WebNativeElement
export function withStyledComponent<K extends keyof HTMLElementTagNameMap>(tagName: K, styled: string): ReturnType;
// export function withStyledComponent<T extends WebNativeElement>(element: T, styled: string): ReturnType;
// export function withStyledComponent<T extends ReturnType>(element:T, styled: string): ReturnType;
export function withStyledComponent(target: any, styled: string) {
    return (data: WebNativeElementParams) => {
        if (data.classList) data.classList.unshift(styled)
        else data.classList = [styled]
        data.tagName = target;
        return new WebNativeElement(data)
    }
}
