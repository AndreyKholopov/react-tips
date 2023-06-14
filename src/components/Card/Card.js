import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import './Card.scss'

const Card = ({
  className,
  backgroundColor,
  borderColor,
  radiusSize,
  width,
  height,
  ...attrs
}) => {

  const classes = classNames(
    'card',
    className
  )

  const dynamicStyles = {
    '--color-background': backgroundColor,
    '--color-border': borderColor,

    '--size-radius': radiusSize,
    '--width': !isNaN(width) ? width + 'px' : width,
    '--height': !isNaN(height) ? height + 'px' : height
  }

  return (
    <div
      className={classes}
      style={dynamicStyles}
      {...attrs}
    >
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  radiusSize: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

Card.defaultProps = {
  className: '',
  backgroundColor: 'white',
  borderColor: '#212121',
  radiusSize: '16px',
  width: '100%',
  height: 100
}

export default Card