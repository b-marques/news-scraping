import React from 'react'
import PropTypes from 'prop-types'
import '_styles/styles.css'

import NavBar from '_molecules/nav-bar'
import Message, { MessageTheme } from '_atoms/message'
import Loader from '_atoms/loader'
import view from '_templates/article/styles.css'
import { http } from '_utils/http'
import navItems from '_utils/navItems'
import ArticleNews from '_organisms/article-news'

const { MEDIA_URL } = process.env

class ArticlePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      hasError: false,
      article: {},
    }
  }

  componentDidMount() {
    this.getArticle()
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props
    if (params.id !== prevProps.match.params.id) {
      this.getArticle()
    }
  }

  getArticle() {
    const {
      match: { params },
    } = this.props
    const { id } = params
    this.setState({ isLoading: true })
    http
      .get(`articles/${id}`)
      .then(response =>
        setTimeout(
          () => this.setState({ isLoading: false, hasError: false, article: response.data }),
          1000
        )
      )
      .catch(() => this.setState({ isLoading: false, hasError: true, article: {} }))
  }

  buildContent = () => {
    const { hasError, isLoading, article } = this.state
    const { title, author, text } = article
    const heroImage = article.hero_image

    if (hasError) return <Message theme={MessageTheme.ERROR}>Something went wrong!</Message>
    if (isLoading) return <Loader>Loading</Loader>
    if (!article.id) return <Message theme={MessageTheme.WARNING}>Article not found!</Message>
    return (
      <div className={view['article-container']}>
        <ArticleNews
          className={view.article}
          title={title}
          authorImage={MEDIA_URL + author.picture}
          authorName={author.name}
          image={MEDIA_URL + heroImage}
          text={text}
        />
      </div>
    )
  }

  render() {
    return (
      <>
        <NavBar items={navItems} />
        {this.buildContent()}
      </>
    )
  }
}

ArticlePage.propTypes = {
  match: PropTypes.instanceOf(Object),
}

ArticlePage.defaultProps = {
  match: {},
}

export default ArticlePage
