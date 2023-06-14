import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { ReactComponent as BubbleSvg } from './Bubble.svg'
import './Bubble.scss'

const Bubble = ({
  className,
  backgroundColor,
  width,
  height,
  blur,
  blurSize,
  ...attrs
}) => {

  const classes = classNames(
    'bubble',
    className
  )

  const dynamicStyles = {
    '--color-background': backgroundColor,

    '--width': !isNaN(width) ? width + 'px' : width,
    '--height': !isNaN(height) ? height + 'px' : height,
    '--blur-size': !isNaN(blurSize) ? blurSize + 'px' : blurSize
  }

  return (
    <div
      className="bubble__container"
      style={dynamicStyles}
    >
      <BubbleSvg
        className={classes}
        {...attrs}
      >
      </BubbleSvg>
      {blur && <BubbleSvg
        className={classes + ' blur'}
        {...attrs}
      >
      </BubbleSvg>}
    </div>
  )
}

Bubble.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  blur: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  blurSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Bubble.defaultProps = {
  className: '',
  backgroundColor: '#FF0066',
  blur: false,
  width: 250,
  height: 250,
  blurSize: 25
}

export default Bubble