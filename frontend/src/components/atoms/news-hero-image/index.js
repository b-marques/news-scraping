import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const NewsHeroImage = props => {
  const { children, image, className } = props
  const classProps = `${styles['news-hero-image']} ${className}`
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={classProps}>
      {children}
    </div>
  )
}

NewsHeroImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.string,
}

NewsHeroImage.defaultProps = {
  className: '',
  children: '',
  image: '',
}

export default NewsHeroImage
