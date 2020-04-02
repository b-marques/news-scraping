import React from 'react'
import PropTypes from 'prop-types'

import NewsHeroImage from '_atoms/news-hero-image'
import Button, { ButtonSize } from '_atoms/button'

import styles from './styles.css'

export const NewsHeroTheme = {
  FEATURED: 'featured',
  DEFAULT: 'default',
}

const NewsHero = props => {
  const { className, newsHeroImage, theme, button } = props
  const classProps = `${styles['news-hero']} ${className}`
  return (
    <div className={classProps}>
      {theme === NewsHeroTheme.FEATURED && (
        <>
          <NewsHeroImage image={newsHeroImage}>
            <Button size={ButtonSize.LARGE}>{button}</Button>
          </NewsHeroImage>
        </>
      )}
      {theme === NewsHeroTheme.DEFAULT && (
        <>
          <NewsHeroImage image={newsHeroImage}>
            <Button size={ButtonSize.MEDIUM}>{button}</Button>
          </NewsHeroImage>
        </>
      )}
    </div>
  )
}

NewsHero.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  newsHeroImage: PropTypes.string,
  button: PropTypes.string,
}

NewsHero.defaultProps = {
  className: '',
  theme: NewsHeroTheme.DEFAULT,
  newsHeroImage: '',
  button: '',
}

export default NewsHero
