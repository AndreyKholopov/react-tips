import React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import './Input.scss'

const Input = ({
  className,
  error,
  disabled,
  value,
  setValue,
  backgroundColor,
  textColor,
  errorColor,
  bezelSize,
  textSize,
  radiusSize,
  ...attrs
}) => {

  const [hasError, setHasError] = useState(error)

  useEffect(() => {
    setHasError(error)
  }, [error])

  const classes = classNames(
    'input',
    className
  )

  const classesField = classNames(
    'input__field',
    hasError && 'input__error'
  )

  const classesLabel = classNames(
    'input__label'
  )

  const dynamicStyles = {
    '--color-background': backgroundColor,
    '--color-text': textColor,
    '--color-error': errorColor,

    '--size-bezel': bezelSize,
    '--size-radius': radiusSize,
    '--size-text': textSize
  }

  return (
    <div>
      <label
        className={classes}
        style={dynamicStyles}
      >

        <input
          className={classesField}
          type="text"
          placeholder=" "
          disabled={disabled}
          value={value}
          onFocus={() => setHasError(false)}
          onBlur={() => error && setHasError(true)}
          onChange={e => setValue(e.target.value)}
          {...attrs}
        />

        <span className={classesLabel}>Label</span>
      </label>
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  errorColor: PropTypes.string,
  bezelSize: PropTypes.string,
  textSize: PropTypes.string,
  radiusSize: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool
}

Input.defaultProps = {
  className: '',
  error: false,
  disabled: false,
  backgroundColor: 'white',
  textColor: '#212121',
  errorColor: '#ed4337',
  bezelSize: '0.5rem',
  textSize: 'calc(0.6rem + 0.4vw)',
  radiusSize: '4px',
}

export default Input