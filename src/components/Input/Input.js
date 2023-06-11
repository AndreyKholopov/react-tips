import React from "react"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import './Input.scss'

const Input = ({
  className,
  error,
  disabled,
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

  return (
    <div>
      <label
        className={classes}
      >

        <input
          className={classesField}
          type="text"
          placeholder=" "
          disabled={disabled}
          onFocus={() => setHasError(false)}
          onBlur={() => error ? setHasError(true) : ''}
          {...attrs}
        />

        <span className={classesLabel}>Label</span>
      </label>
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool
}

Input.defaultTypes = {
  className: '',
  error: true,
  disabled: true
}

export default Input