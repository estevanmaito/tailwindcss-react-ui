import React from 'react'
import classNames from 'classnames'
import makeClasses from '../utils/makeClasses'
import PropTypes from 'prop-types'

/**
 * To style base styles of the component, look for the properties it accepts and change them.
 * For example, a component that accepts a `text` property could receive any property that you
 * would normally append with `text`.
 *
 * So, `text="normal gray-800"` would result in `text-normal`
 * and `text-gray-800` being applied.
 *
 * If you want to ADD a property, use `extend` and add to it
 * the same classes you would with normal Tailwind, like `extend="cursor-pointer"`.
 *
 * If you just want to start from scratch, use `extend` alongside with `reset`.
 * Below you will find tons of examples.
 *
 * 👇 See PROPS & METHODS for more details.
 */
const Button = React.forwardRef(function Button(props, ref) {
  const {
    h,
    px,
    text,
    bg,
    hover,
    focus,
    transition,
    duration,
    rounded,
    tag,
    extend,
    disabled,
    reset,
    href,
    children,
    ...other
  } = props

  const styles = { h, px, text, bg, hover, focus, transition, duration, rounded }

  const anchorStyle = 'inline-flex items-center'
  const disabledStyle = 'opacity-50 cursor-not-allowed'

  const classes = classNames(
    makeClasses(styles),
    tag === 'a' && anchorStyle,
    extend && extend,
    disabled && disabledStyle
  )

  const classesWithReset = classNames(extend && extend)

  let Component
  switch (tag) {
    case 'a':
      Component = 'a'
      break
    default:
      Component = 'button'
      break
  }

  return (
    <Component
      className={reset ? classesWithReset : classes}
      href={tag === 'a' ? href : undefined}
      disabled={disabled}
      ref={ref}
      {...other}
    >
      {children}
    </Component>
  )
})

Button.propTypes = {
  /** Defines height */
  h: PropTypes.string,
  /** Defines left and right padding */
  px: PropTypes.string,
  /** Defines text color */
  text: PropTypes.string,
  /** Defines background color */
  bg: PropTypes.string,
  /** Defines hover styles */
  hover: PropTypes.string,
  /** Defines focus styles */
  focus: PropTypes.string,
  /** Defines transtion properties */
  transition: PropTypes.string,
  /** Set transition duration */
  duration: PropTypes.string,
  /** Defines border radius */
  rounded: PropTypes.string,
  /** Defines the HTML element used */
  tag: PropTypes.oneOf(['button', 'a']),
  /** Only works with anchor tag. Use with tag="a" */
  href: PropTypes.string,
  /** Extend current design with new styles (ones that are not listed here as props) */
  extend: PropTypes.string,
  /** Reset styling. Use this with extend to add your own style. */
  reset: PropTypes.bool,
  /** Button label */
  children: PropTypes.any,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Defines the type attribute */
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
}

Button.defaultProps = {
  h: '10',
  px: '5',
  text: 'normal indigo-100',
  bg: 'indigo-700',
  hover: 'bg-indigo-800',
  focus: 'shadow-outline',
  transition: 'colors',
  duration: '150',
  rounded: 'lg',
  tag: 'button',
  type: 'button',
}

export default Button
