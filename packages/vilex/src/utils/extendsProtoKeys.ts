type ExtendsProtoKeysRetrunType<T, K> = T & K

export function ExtendsProtoKeys<T>(
  target: T,
  options: Record<string, unknown>
): ExtendsProtoKeysRetrunType<T, typeof options> {
  Object.assign(
    (target as { __proto__: Record<string, unknown> }).__proto__,
    options
  )
  return target as ExtendsProtoKeysRetrunType<T, typeof options>
}
