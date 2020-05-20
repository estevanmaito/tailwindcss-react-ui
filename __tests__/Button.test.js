import React from 'react'
import { mount } from 'enzyme'
import Button from '../src/components/Button'

describe('Button', () => {
  it('should render without crashing', () => {
    mount(<Button />)
  })

  it('should render a button element', () => {
    const wrapper = mount(<Button />)

    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should change background color', () => {
    const expected =
      'h-10 px-5 text-normal text-indigo-100 bg-red-700 hover:bg-indigo-800 focus:shadow-outline transition-colors duration-150 rounded-lg'
    const wrapper = mount(<Button bg="red-700">Hi</Button>)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toBe(expected)
  })

  it('should contain base classes', () => {
    const expected =
      'h-10 px-5 text-normal text-indigo-100 bg-indigo-700 hover:bg-indigo-800 focus:shadow-outline transition-colors duration-150 rounded-lg'
    const wrapper = mount(<Button>Hi</Button>)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toBe(expected)
  })

  it('should extend base classes', () => {
    const expected = 'cursor-not-allowed border-2 border-red-500'
    const wrapper = mount(<Button extend="cursor-not-allowed border-2 border-red-500">Hi</Button>)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render as an anchor element', () => {
    const wrapper = mount(<Button tag="a" />)

    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('should render anchor styles if tag is a', () => {
    const expected = 'inline-flex items-center'
    const wrapper = mount(<Button tag="a" />)

    expect(wrapper.getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain href for anchors', () => {
    const expected = 'http://localhost:3000/'
    const wrapper = mount(<Button tag="a" href="http://localhost:3000/" />)

    expect(wrapper.find('a').getDOMNode().getAttribute('href')).toEqual(expected)
  })

  it('should not contain href for buttons', () => {
    const wrapper = mount(<Button href="http://localhost:3000/" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('href')).toBeNull()
  })

  it('should remove all styles using reset', () => {
    const expected = ''
    const wrapper = mount(<Button reset />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toBe(expected)
  })

  it('should remove all styles using reset and add extend', () => {
    const expected = 'bg-blue-500'
    const wrapper = mount(<Button extend="bg-blue-500" reset />)

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toBe(expected)
  })

  it('should be disabled', () => {
    const wrapper = mount(<Button disabled />)

    expect(wrapper.find('button[disabled]')).toHaveLength(1)
  })

  it('should contain appropriate classes when disabled', () => {
    const expected = 'opacity-50 cursor-not-allowed'
    const wrapper = mount(<Button disabled />)

    expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should call onClick callback', (done) => {
    mount(<Button onClick={() => done()} />).simulate('click')
  })

  it('should contain the appropriate type', () => {
    const expected = 'submit'
    const wrapper = mount(<Button type="submit" />)

    expect(wrapper.find('button').getDOMNode().getAttribute('type')).toBe(expected)
  })
})
