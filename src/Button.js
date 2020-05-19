import React from 'react'
import classNames from 'classnames'
import makeClasses from './utils/makeClasses'
import PropTypes from 'prop-types'

Button.propTypes = {
  h: PropTypes.string,
  px: PropTypes.string,
  text: PropTypes.string,
  bg: PropTypes.string,
  hover: PropTypes.string,
  focus: PropTypes.string,
  transition: PropTypes.string,
  duration: PropTypes.string,
  rounded: PropTypes.string,
  tag: PropTypes.string,
  href: PropTypes.string,
  extend: PropTypes.string,
  children: PropTypes.any,
}

function Button(props) {
  const style = {
    h: props.h || '10',
    px: props.px || '5',
    text: props.text || 'normal indigo-100',
    bg: props.bg || 'indigo-700',
    hover: props.hover || 'bg-indigo-800',
    focus: props.focus || 'shadow-outline',
    transition: props.transition || 'colors',
    duration: props.duration || '150',
    rounded: props.rounded || 'lg',
  }

  const anchorStyle = 'inline-flex items-center'

  const classes = classNames(
    makeClasses(style),
    props.tag === 'a' && anchorStyle,
    props.extend && props.extend
  )

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
    <Component className={classes} href={props.tag === 'a' ? props.href : undefined}>
      {props.children}
    </Component>
  )
}

export default Button
