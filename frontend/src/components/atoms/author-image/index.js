import React from 'react'
import styles from './styles.css'

const AuthorImage = props => {
  const { children, image, className } = props
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
}

export default AuthorImage
