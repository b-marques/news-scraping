import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Button = props => {
  const { children, size, onClick, className } = props
  const classProps = `${styles.button} ${styles[size]} ${className}`
  return (
    <button className={classProps} onClick={onClick} type="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  size: ButtonSize.MEDIUM,
  className: '',
  children: '',
  onClick: () => {},
}

export default Button
