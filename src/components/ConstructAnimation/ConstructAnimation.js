import React from "react"
import { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import './ConstructAnimation.scss'

const ConstructAnimation = ({
  className,
  color,
  image,
  children,
  direction,
  startAnimation,
  ...attrs
}) => {

  const wrapper = useRef(null)
  const blocks = useRef([])

  useEffect(() => {
    blocks.current.forEach(el => {
      el.style.setProperty('--background-size', `${wrapper.current ? wrapper.current.getBoundingClientRect().width : 0}px ${wrapper.current ? wrapper.current.getBoundingClientRect().height : 0}px`)
    })
  })

  const ucFirst = (str) => {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  const classes = classNames(
    'construct-animation',
    className
  )

  const dynamicStyles = {
    '--background': image ? `url(${image})` : color,
    animation: startAnimation && `constructAnimation${ucFirst(direction)} 0.75s ease-in-out forwards`
  }

  return (
    <div
      className='construct-animation__wrapper'
      ref={wrapper}
    >
      <div className='construct-animation__children-content'>
        {children}
      </div>
      {Array.from({ length: 400 }, (_, i) => (
        <div
          ref={el => blocks.current[i] = el}
          key={i}
          className={classes}
          style={{
            ...dynamicStyles,
            animationDelay: `${i * Math.random() * 0.005}s`,
            '--background-position': `${i % 20 * 5}% ${Math.floor(i / 20) * 5}%`
          }}
          {...attrs}
        />
      ))}
    </div>
  )
}

ConstructAnimation.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  direction: PropTypes.oneOf(['top', 'right', 'down', 'left']),
  startAnimation: PropTypes.bool
}

ConstructAnimation.defaultProps = {
  className: '',
  color: '#FF0066',
  image: '',
  direction: 'down',
  startAnimation: false
}

export default ConstructAnimation