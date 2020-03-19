import React from 'react'
import PropTypes from 'prop-types'

import Tag from '_atoms/tag'
import NewsHero, { NewsHeroTheme } from '_molecules/news-hero'
import Title, { TitleSize } from '_atoms/title'
import Author, { AuthorTheme } from '_molecules/author'
import Text from '_atoms/text'

import styles from './styles.css'

export const NewsTheme = {
  FEATURED: 'featured',
  HEADLINE: 'headline',
  DEFAULT: 'default',
}

const News = props => {
  const { image, button, theme, className, tag, title, authorImage, authorName, text } = props
  const { classProps } = `${className} ${styles[theme]}`
  return (
    <div className={classProps}>
      <Tag className={styles.tag} theme={tag}>
        {tag}
      </Tag>
      {theme === NewsTheme.FEATURED && (
        <>
          <NewsHero
            className={styles.heroimage}
            newsHeroImage={image}
            button={button}
            theme={NewsHeroTheme.FEATURED}
          />
          <Title className={styles.title} size={TitleSize.LARGE}>
            {title}
          </Title>
          <Author
            className={styles.author}
            authorImage={authorImage}
            authorName={authorName}
            theme={AuthorTheme.FEATURED}
          />
        </>
      )}
      {theme === NewsTheme.HEADLINE && (
        <>
          <NewsHero
            className={styles.heroimage}
            newsHeroImage={image}
            button={button}
            theme={NewsHeroTheme.DEFAULT}
          />
          <Title className={styles.title}>{title}</Title>
          <Author
            className={styles.author}
            authorImage={authorImage}
            authorName={authorName}
            theme={AuthorTheme.DEFAULT}
          />
        </>
      )}
      {theme === NewsTheme.DEFAULT && (
        <>
          <Title className={styles.title}>{title}</Title>
          <Author
            className={styles.author}
            authorImage={authorImage}
            authorName={authorName}
            theme={AuthorTheme.DEFAULT}
          />
        </>
      )}
      <Text className={styles.text}>{text}</Text>
    </div>
  )
}

News.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  tag: PropTypes.string,
  button: PropTypes.string,
  title: PropTypes.string,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

News.defaultProps = {
  className: '',
  theme: NewsTheme.DEFAULT,
  tag: '',
  button: '',
  title: '',
  authorImage: '',
  authorName: '',
  text: '',
  image: '',
}

export default News
