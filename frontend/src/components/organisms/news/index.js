import React from 'react'

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
  const classProps = `${props.className}`
  return (
    <div className={classProps}>
      <Tag>{props.tag}</Tag>
      {props.theme == NewsTheme.FEATURED && (
        <>
          <NewsHero
            newsHeroImage={props.image}
            button={props.button}
            theme={NewsHeroTheme.FEATURED}
          />
          <Title size={TitleSize.LARGE}>{props.title}</Title>
          <Author
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.FEATURED}
          />
        </>
      )}
      {props.theme == NewsTheme.HEADLINE && (
        <>
          <NewsHero
            newsHeroImage={props.image}
            button={props.button}
            theme={NewsHeroTheme.DEFAULT}
          />
          <Title>{props.title}</Title>
          <Author
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.DEFAULT}
          />
          <Text>{props.text}</Text>
        </>
      )}
      {props.theme == NewsTheme.DEFAULT && (
        <>
          <Title>{props.title}</Title>
          <Author
            authorImage={props.authorImage}
            authorName={props.authorName}
            theme={AuthorTheme.DEFAULT}
          />
          <Text>{props.text}</Text>
        </>
      )}
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
