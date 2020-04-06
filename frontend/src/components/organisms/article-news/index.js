import React from 'react'
import PropTypes from 'prop-types'

import Title, { TitleSize, TitleTheme } from '_atoms/title'
import Author, { AuthorTheme } from '_molecules/author'
import Text from '_atoms/text'
import NewsHeroImage from '_atoms/news-hero-image'

import styles from './styles.css'

const ArticleNews = props => {
  const { image, className, title, authorImage, authorName, text, children } = props
  const classProps = `${styles['article-news']} ${className}`

  return (
    <div className={classProps}>
      <Title className={styles.title} size={TitleSize.LARGE} theme={TitleTheme.NO_BG_COLOR}>
        {title}
      </Title>
      <Author authorImage={authorImage} authorName={authorName} theme={AuthorTheme.FEATURED} />
      <NewsHeroImage className={styles.image} image={image} />
      <Text>{text}</Text>
      {children}
    </div>
  )
}

ArticleNews.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
}

ArticleNews.defaultProps = {
  className: '',
  title: '',
  authorImage: '',
  authorName: '',
  text: '',
  image: '',
  children: '',
}

export default ArticleNews
