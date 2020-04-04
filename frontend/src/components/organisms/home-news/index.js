import React from 'react'
import PropTypes from 'prop-types'

import Tag from '_atoms/tag'
import NewsHero, { NewsHeroTheme } from '_molecules/news-hero'
import Title from '_atoms/title'
import Text from '_atoms/text'

import styles from './styles.css'

export const HomeNewsTheme = {
  FEATURED: 'featured',
  HEADLINE: 'headline',
  DEFAULT: 'default',
}

const HomeNews = props => {
  const { image, button, theme, className, tag, title, text } = props
  const classProps = `${className} ${styles[theme]}`
  return (
    <div className={classProps}>
      {theme === HomeNewsTheme.FEATURED && (
        <NewsHero
          className={styles.heroimage}
          newsHeroImage={image}
          button={button}
          theme={NewsHeroTheme.FEATURED}
          tag={tag}
          title={title}
        />
      )}
      {theme === HomeNewsTheme.HEADLINE && (
        <NewsHero
          className={styles.heroimage}
          newsHeroImage={image}
          button={button}
          theme={NewsHeroTheme.DEFAULT}
          tag={tag}
          title={title}
        />
      )}
      {theme === HomeNewsTheme.DEFAULT && (
        <>
          <Tag theme={tag}>{tag}</Tag>
          <Title className={styles.title}>{title}</Title>
          <Text className={styles.text}>{text}</Text>
        </>
      )}
    </div>
  )
}

HomeNews.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  tag: PropTypes.string,
  button: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

HomeNews.defaultProps = {
  className: '',
  theme: HomeNewsTheme.DEFAULT,
  tag: '',
  button: '',
  title: '',
  text: '',
  image: '',
}

export default HomeNews
