import React from 'react'
import PropTypes from 'prop-types'

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

Message.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.string,
}

Message.defaultProps = {
  className: '',
  children: '',
  theme: 'default',
}

export default Message
