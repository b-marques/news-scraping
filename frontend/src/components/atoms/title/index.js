import React from 'react'
import PropTypes from 'prop-types'

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

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
}

Title.defaultProps = {
  className: '',
  children: '',
  size: TitleSize.MEDIUM,
}

export default Title
