import React from 'react'
import styles from './styles.css'

export const AuthorImageSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
}

const AuthorImage = props => {
  const { children, image, size, className } = props
  const classProps = `${styles['author-image']} ${className}`
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={classProps}>
      {children}
    </div>
  )
}

AuthorImage.defaultProps = {
  className: '',
  children: '',
  image: '',
  size: AuthorImageSize.MEDIUM,
}

export default AuthorImage
