import React from 'react'
import styles from './styles.css'

const AuthorName = props => {
  const { children, className } = props
  const classProps = `${styles['author-name']} ${className}`
  return <span className={classProps}>{children}</span>
}

AuthorName.defaultProps = {
  className: '',
  children: '',
}

export default AuthorName
