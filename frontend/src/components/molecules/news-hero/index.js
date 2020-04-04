import React from 'react'
import PropTypes from 'prop-types'

import NewsHeroImage from '_atoms/news-hero-image'
import Button, { ButtonSize } from '_atoms/button'
import Tag from '_atoms/tag'
import Title, { TitleSize } from '_atoms/title'

import styles from './styles.css'

export const NewsHeroTheme = {
  FEATURED: 'featured',
  DEFAULT: 'default',
}

const NewsHero = props => {
  const { className, newsHeroImage, theme, button, tag, title } = props
  const classProps = `${styles['news-hero']} ${className}`
  return (
    <div className={classProps}>
      <NewsHeroImage image={newsHeroImage}>
        <Tag className={styles.tag} theme={tag}>
          {tag}
        </Tag>
        <Button size={theme === NewsHeroTheme.FEATURED ? ButtonSize.LARGE : ButtonSize.MEDIUM}>
          {button}
        </Button>
        <Title size={theme === NewsHeroTheme.FEATURED ? TitleSize.LARGE : TitleSize.MEDIUM}>
          {title}
        </Title>
      </NewsHeroImage>
    </div>
  )
}

NewsHero.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  newsHeroImage: PropTypes.string,
  button: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
}

NewsHero.defaultProps = {
  className: '',
  theme: NewsHeroTheme.DEFAULT,
  newsHeroImage: '',
  button: '',
  tag: '',
  title: '',
}

export default NewsHero
