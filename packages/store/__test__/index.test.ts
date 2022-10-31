import { describe, expect, it } from 'vitest'
import { createStore } from '../src/index'

describe(`测试如何传入值类型`, () => {
  it(`createStore(0)`, () => {
    expect(createStore(0)).toBe(0)
  })
})
