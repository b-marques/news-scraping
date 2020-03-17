import React from 'react'
import styles from './styles.css'

const NewsHeroImage = props => {
  const { children, image, size, className } = props
  const classProps = `${styles['news-hero-image']} ${className}`
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
}

export default NewsHeroImage
