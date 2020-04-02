import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Text = props => {
  const { children, className } = props
  const classProps = `${styles.text} ${className}`
  return <p className={classProps}>{children}</p>
}

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Text.defaultProps = {
  className: '',
  children: '',
}

export default Text
