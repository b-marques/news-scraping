import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Divider = props => {
  const { children, className } = props
  const classProps = `${styles.divider} ${className}`
  return <div className={classProps}>{children}</div>
}

Divider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Divider.defaultProps = {
  className: '',
  children: '',
}

export default Divider
