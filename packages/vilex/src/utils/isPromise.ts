export function isPromise(value: any) {
    return value && value.then && value.catch
}