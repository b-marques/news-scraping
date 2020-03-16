import React from 'react'
import styles from './styles.css'

const Divider = props => {
  const { children, className } = props
  const classProps = `${styles.divider} ${className}`
  return <div className={classProps}>{children}</div>
}

Divider.defaultProps = {
  className: '',
  children: '',
}

export default Divider
