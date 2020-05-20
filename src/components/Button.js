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

const style = {
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

Button.defaultProps = style

function Button(props) {
  const anchorStyle = 'inline-flex items-center'
  const disabledStyle = 'opacity-50 cursor-not-allowed'

  const classes = classNames(
    makeClasses(style),
    props.tag === 'a' && anchorStyle,
    props.extend && props.extend,
    props.disabled && disabledStyle
  )

  const classesWithReset = classNames(props.extend && props.extend)

  let Component
  switch (props.tag) {
    case 'a':
      Component = 'a'
      break
    default:
      Component = 'button'
      break
  }

  return (
    <Component
      className={props.reset ? classesWithReset : classes}
      href={props.tag === 'a' ? props.href : undefined}
      disabled={props.disabled}
    >
      {props.children}
    </Component>
  )
}

export default Button
