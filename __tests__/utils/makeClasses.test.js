import makeClasses from '../../src/utils/makeClasses'

describe('makeClasses', () => {
  it('should return one classes with appended name', () => {
    const style = {
      h: '10',
    }
    const actual = makeClasses(style)
    const expected = 'h-10'

    expect(actual).toBe(expected)
  })

  it('should return a list of classes, from different properties', () => {
    const style = {
      h: '10',
      text: 'normal',
    }

    const actual = makeClasses(style)
    const expected = 'h-10 text-normal'

    expect(actual).toBe(expected)
  })

  it('should return a list of classes, from the same property', () => {
    const style = {
      text: 'normal indigo-700',
    }

    const actual = makeClasses(style)
    const expected = 'text-normal text-indigo-700'

    expect(actual).toBe(expected)
  })

  it('should return a list of classes, from different properties with multiple children classes', () => {
    const style = {
      h: '10',
      text: 'normal indigo-700',
    }

    const actual = makeClasses(style)
    const expected = 'h-10 text-normal text-indigo-700'

    expect(actual).toBe(expected)
  })

  it('should use colon for hover and focus utilities', () => {
    const style = {
      hover: 'bg-blue-700',
      focus: 'shadow-outline',
    }

    const actual = makeClasses(style)
    const expected = 'hover:bg-blue-700 focus:shadow-outline'

    expect(actual).toBe(expected)
  })
})
