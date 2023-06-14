import React from "react"
import { useRef } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import './BurgerToCross.scss'

const BurgerToCross = ({
  className,
  color,
  width,
  active,
  setActive,
  ...attrs
}) => {

  const divBlock = useRef(null);

  const classes = classNames(
    'burger-to-cross',
    active && 'active',
    className
  )

  const dynamicStyles = {
    '--primary-color': color,

    '--width': width + 'px',
  }

  return (
    <div
      ref={divBlock}
      className={classes}
      style={dynamicStyles}
      onClick={() => setActive(!active)}
      {...attrs}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

BurgerToCross.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  active: PropTypes.bool,
  setActive: PropTypes.func
}

BurgerToCross.defaultProps = {
  className: '',
  color: '#212121',
  width: 60,
  active: false
}

export default BurgerToCross