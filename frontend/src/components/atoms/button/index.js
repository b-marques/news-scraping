import React from 'react'

import styles from './styles.css'

export const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Button = props => {
  const { children, size, onClick, className } = props
  const classProps = `${styles.button} ${styles[size]} ${className}`
  return (
    <button className={classProps} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: ButtonSize.MEDIUM,
  className: '',
  children: '',
  onClick: () => {},
}

export default Button
