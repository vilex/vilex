// import { sid } from './sid'

// type CallbackFun<U> =  (callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

// function _map<U>(this: any, callbackfn: CallbackFun<U>, thisArg) {
//   if (this == null) {
//     throw new TypeError("Cannot read property 'map' of null or undefined")
//   }
//   //  转成数组对象，有 length 属性和 K-V 键值对
//   const O = Object(this)
//   //  无符号右移 0 位，左侧用 0 填充，结果非负
//   const len = O.length >>> 0
//   if (typeof callbackfn !== 'function') {
//     throw new TypeError(callbackfn + ' is not a function')
//   }
//   const T = thisArg
//   const A = new Array(len)
//   let k = 0
//   const key = sid().value
//   while (k < len) {
//     if (k in O) {
//       const kValue = O[k]
//       const mappedValue = callbackfn.call(T, kValue, k, O)
//       ViNode(key, mappedValue)
//       A[k] = mappedValue
//     }
//     k++
//   }
//   return A
// }

// function ViNode(key: string, value) {
//   if (value && value.id && value.$ && value.$.type) {
//     const _ = value
//     Reflect.defineProperty(_, '_$_key', {
//       value: key,
//       writable: false,
//       enumerable: false,
//       configurable: false
//     })
//   }
// }

// Array.prototype.map = _map
