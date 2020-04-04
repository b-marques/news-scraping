import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const TitleSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const TitleTheme = {
  NO_BG_COLOR: 'no-bg-color',
}

const Title = props => {
  const { children, size, className, theme } = props
  const classProps = `${styles.title} ${styles[size]} ${styles[theme]} ${className}`
  return <h1 className={classProps}>{children}</h1>
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  theme: PropTypes.string,
}

Title.defaultProps = {
  className: '',
  children: '',
  size: TitleSize.MEDIUM,
  theme: '',
}

export default Title
