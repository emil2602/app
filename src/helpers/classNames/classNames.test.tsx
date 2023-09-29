import { classNames } from './classNames'

describe('classNames', () => {
  test('Working with one param', () => {
    expect(classNames('SomeClass')).toBe('SomeClass')
  })

  test('Working with additional param', () => {
    const output = 'SomeClass class1 class2'
    expect(classNames('SomeClass', {}, ['class1', 'class2'])).toBe(output)
  })

  test('Working with additional mods', () => {
    const output = 'SomeClass hovered sceollable'
    expect(classNames('SomeClass', {
      hovered: true,
      sceollable: true
    })).toBe(output)
  })
})
