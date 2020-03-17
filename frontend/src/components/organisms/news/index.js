import React from 'react'
import newsStyles from '_templates/news/styles.css'
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
  const classProps = `${props.className} ${newsStyles[props.theme]}`
  return (
    <div className={classProps}>
      <Tag className={newsStyles.tag}>{props.tag}</Tag>
      {props.theme == NewsTheme.FEATURED && (
        <>
          <NewsHero
            className={newsStyles.heroimage}
            newsHeroImage={props.image}
            button={props.button}
            theme={NewsHeroTheme.FEATURED}
          />
          <Title className={newsStyles.title} size={TitleSize.LARGE}>
            {props.title}
          </Title>
          <Author
            className={newsStyles.author}
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.FEATURED}
          />
        </>
      )}
      {props.theme == NewsTheme.HEADLINE && (
        <>
          <NewsHero
            className={newsStyles.heroimage}
            newsHeroImage={props.image}
            button={props.button}
            theme={NewsHeroTheme.DEFAULT}
          />
          <Title className={newsStyles.title}>{props.title}</Title>
          <Author
            className={newsStyles.author}
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.DEFAULT}
          />
        </>
      )}
      {props.theme == NewsTheme.DEFAULT && (
        <>
          <Title className={newsStyles.title}>{props.title}</Title>
          <Author
            className={newsStyles.author}
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.DEFAULT}
          />
        </>
      )}
      <Text className={newsStyles.text}>{props.text}</Text>
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
