import React from 'react'

import styles from './styles.css'

export const TitleSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Title = props => {
  const { children, size, className } = props
  const classProps = `${styles.title} ${styles[size]} ${className}`
  return <h1 className={classProps}>{children}</h1>
}

Title.defaultProps = {
  size: TitleSize.MEDIUM,
  className: '',
  children: '',
}

export default Title
