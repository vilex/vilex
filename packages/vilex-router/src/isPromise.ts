interface PromiseType {
  then?: unknown
  catch?: unknown
  [K: string | number | symbol]: unknown
}

export const isPromise = (value: PromiseType & any) =>
  value && value.then && value.catch
