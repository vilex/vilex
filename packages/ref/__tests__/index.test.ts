import { describe, expect, it } from 'vitest'
import { sum } from '../src/index'

describe(`测试 sum 方法`, () => {
  it(`sum()`, () => expect(sum()).toBe(0))
})
