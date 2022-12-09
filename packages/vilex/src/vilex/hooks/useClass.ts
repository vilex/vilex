export interface UseClassType {
  [key: string]: boolean | string
  _$_type: 'class'
}

export const useClass = <T extends UseClassType>(anyClass: T): T => {
  anyClass._$_type = 'class'
  return anyClass
}
