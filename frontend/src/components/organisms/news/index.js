import React from 'react'
import styles from './styles.css'
import Tag from '_atoms/tag'
import NewsHero, { NewsHeroTheme } from '_molecules/news-hero'
import Title, { TitleSize } from '_atoms/title'
import Author, { AuthorTheme } from '_molecules/author'
import Text from '_atoms/text'

export const NewsTheme = {
  FEATURED: 'featured',
  HEADLINE: 'headline',
  DEFAULT: 'default',
}

const News = props => {
  const classProps = `${props.className} ${styles[props.theme]}`
  return (
    <div className={classProps}>
      <Tag className={styles.tag} theme={props.tag}>
        {props.tag}
      </Tag>
      {props.theme == NewsTheme.FEATURED && (
        <>
          <NewsHero
            className={styles.heroimage}
            newsHeroImage={props.image}
            button={props.button}
            theme={NewsHeroTheme.FEATURED}
          />
          <Title className={styles.title} size={TitleSize.LARGE}>
            {props.title}
          </Title>
          <Author
            className={styles.author}
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.FEATURED}
          />
        </>
      )}
      {props.theme == NewsTheme.HEADLINE && (
        <>
          <NewsHero
            className={styles.heroimage}
            newsHeroImage={props.image}
            button={props.button}
            theme={NewsHeroTheme.DEFAULT}
          />
          <Title className={styles.title}>{props.title}</Title>
          <Author
            className={styles.author}
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.DEFAULT}
          />
        </>
      )}
      {props.theme == NewsTheme.DEFAULT && (
        <>
          <Title className={styles.title}>{props.title}</Title>
          <Author
            className={styles.author}
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.DEFAULT}
          />
        </>
      )}
      <Text className={styles.text}>{props.text}</Text>
    </div>
  )
}

News.defaultProps = {
  className: '',
  children: '',
  theme: NewsTheme.DEFAULT,
  tag: '',
  newsHeroImage: '',
  button: '',
  title: '',
  authorImage: '',
  authorName: '',
  text: '',
}

export default News
