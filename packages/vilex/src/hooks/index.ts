import { ViElement } from '../vii'

/**
 * 绑定到某个变量上
 * @param _var
 */
export const bindToVar = (_var: ViElement | null | undefined) => {
  return {
    _$_type: 'hook_bind_to_var',
    _$_var: _var
  }
}
