import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const AuthorImageSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
}

const AuthorImage = props => {
  const { children, image, size, className } = props
  const classProps = `${styles['author-image']} ${styles[size]} ${className}`
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={classProps}>
      {children}
    </div>
  )
}

AuthorImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.string,
  size: PropTypes.string,
}

AuthorImage.defaultProps = {
  className: '',
  children: '',
  image: '',
  size: AuthorImageSize.MEDIUM,
}

export default AuthorImage
