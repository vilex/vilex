function reactive<T extends object>(value: T) {
    if (!value) return value
    const handler = {
        set(target)
    }
    new Proxy(value, {})
}