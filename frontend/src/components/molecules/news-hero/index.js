import React from 'react'

import NewsHeroImage, { NewsHeroImageSize } from '_atoms/news-hero-image'
import Button, { ButtonSize } from '_atoms/button'

export const NewsHeroTheme = {
  FEATURED: 'featured',
  DEFAULT: 'default',
}

const NewsHero = props => {
  const { className, newsHeroImage, theme, button } = props
  const classProps = `${className}`
  return (
    <div className={classProps}>
      {theme == NewsHeroTheme.FEATURED && (
        <>
          <NewsHeroImage image={newsHeroImage} size={NewsHeroImageSize.LARGE}>
            <Button size={ButtonSize.LARGE}>{button}</Button>
          </NewsHeroImage>
        </>
      )}
      {theme == NewsHeroTheme.DEFAULT && (
        <>
          <NewsHeroImage image={newsHeroImage} size={NewsHeroImageSize.MEDIUM}>
            <Button size={ButtonSize.MEDIUM}>{button}</Button>
          </NewsHeroImage>
        </>
      )}
    </div>
  )
}

NewsHero.defaultProps = {
  className: '',
  children: '',
  theme: NewsHeroTheme.DEFAULT,
  newsHeroImage: '',
  button: '',
}

export default NewsHero
