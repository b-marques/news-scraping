import React from 'react'
import styles from './styles.css'

export const NewsHeroImageSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
}

const NewsHeroImage = props => {
  const { children, image, size, className } = props
  const classProps = `${styles['news-hero-image']} ${styles[size]} ${className}`
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={classProps}>
      {children}
    </div>
  )
}

NewsHeroImage.defaultProps = {
  className: '',
  children: '',
  image: '',
  size: NewsHeroImageSize.MEDIUM,
}

export default NewsHeroImage
