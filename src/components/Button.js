import React from 'react'
import classNames from 'classnames'
import makeClasses from '../utils/makeClasses'
import PropTypes from 'prop-types'

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
  /** Defines the HTML element used
   * @default 'button
   */
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
}

function Button(props) {
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
      {...other}
    >
      {children}
    </Component>
  )
}

export default Button
