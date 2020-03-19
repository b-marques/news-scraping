import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const AuthorName = props => {
  const { children, className } = props
  const classProps = `${styles['author-name']} ${className}`
  return <span className={classProps}>{`by ${children}`}</span>
}

AuthorName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

AuthorName.defaultProps = {
  className: '',
  children: '',
}

export default AuthorName
