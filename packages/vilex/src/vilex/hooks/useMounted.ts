import { ViElement } from '../../vii'

export const useMounted = (callFn: (vn: ViElement) => void) => ({
  _$_type: 'hook_mounted',
  _$_call: callFn
})
