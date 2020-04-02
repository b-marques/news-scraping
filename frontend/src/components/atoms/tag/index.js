import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const TagTheme = {
  DEFAULT: 'default',
  POLITICS: 'politics',
  BUSINESS: 'business',
  TECH: 'tech',
  SCIENCE: 'science',
  SPORTS: 'sports',
}

const Tag = props => {
  const { children, theme, className } = props
  const classProps = `${styles.tag} ${styles[theme]} ${className}`
  return <span className={classProps}>{children}</span>
}

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.string,
}

Tag.defaultProps = {
  className: '',
  children: '',
  theme: TagTheme.DEFAULT,
}

export default Tag
