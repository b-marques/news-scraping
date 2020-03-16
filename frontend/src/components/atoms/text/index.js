import React from 'react'
import styles from './styles.css'

const Text = props => {
  const { children, className } = props
  const classProps = `${styles.text} ${className}`
  return <p className={classProps}>{children}</p>
}

Text.defaultProps = {
  className: '',
  children: '',
}

export default Text
