import React from 'react'
import styles from './styles.css'

export const MessageTheme = {
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
  DEFAULT: 'default',
}

const Message = props => {
  const { children, className, theme } = props
  const classProps = `${styles.message} ${styles[theme]} ${className}`
  return <h1 className={classProps}>{children}</h1>
}

Message.defaultProps = {
  className: '',
  children: '',
  theme: 'default',
}

export default Message
