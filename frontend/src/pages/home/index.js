import React from 'react'
import PropTypes from 'prop-types'
import '_styles/styles.css'

import NavBar from '_molecules/nav-bar'
import News, { NewsTheme } from '_organisms/news'
import Divider from '_atoms/divider'
import Message, { MessageTheme } from '_atoms/message'
import Loader from '_atoms/loader'
import view from '_templates/home/styles.css'
import { http } from '_utils/http'
import navItems from '_utils/navItems'

const FeaturedNews = [0]
const HeadlineNews = [1, 2]
const DefaultNews = [3, 4, 5]
const { MEDIA_URL } = process.env

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      hasError: false,
      articles: [],
    }
  }

  componentDidMount() {
    this.getArticles()
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props
    if (params.subject !== prevProps.match.params.subject) {
      this.getArticles()
    }
  }

  getArticles() {
    const {
      match: { params },
    } = this.props
    const subject = params.subject || ''
    this.setState({ isLoading: true })
    http
      .get(`articles/${subject}`)
      .then(response =>
        setTimeout(
          () =>
            this.setState({ isLoading: false, hasError: false, articles: response.data.results }),
          1000
        )
      )
      .catch(() => this.setState({ isLoading: false, hasError: true, articles: [] }))
  }

  buildNews = (position, theme) => {
    const { articles } = this.state
    const { subject, title, author, text } = articles[position]
    const heroImage = articles[position].hero_image

    return (
      <News
        key={position}
        tag={subject.name}
        button="Read More"
        title={title}
        authorName={author.name}
        authorImage={MEDIA_URL + author.picture}
        text={text}
        image={MEDIA_URL + heroImage}
        theme={theme}
      />
    )
  }

  buildContent = () => {
    const { hasError, isLoading, articles } = this.state
    if (hasError) return <Message theme={MessageTheme.ERROR}>Something went wrong!</Message>
    if (isLoading) return <Loader>Loading</Loader>
    if (articles.length === 0)
      return <Message theme={MessageTheme.WARNING}>Theres is no news to display!</Message>
    return (
      <div className={view.default}>
        <div className={view.navbar} />
        <div className={view.featured}>
          {FeaturedNews.map(i => articles[i] && this.buildNews(i, NewsTheme.FEATURED))}
        </div>
        <div className={view.headlines}>
          {HeadlineNews.map(i => articles[i] && this.buildNews(i, NewsTheme.HEADLINE))}
        </div>
        <div className={view.divider}>
          <Divider />
        </div>
        <div className={view.defaults}>
          {DefaultNews.map(i => articles[i] && this.buildNews(i, NewsTheme.DEFAULT))}
        </div>
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

HomePage.propTypes = {
  match: PropTypes.instanceOf(Object),
}

HomePage.defaultProps = {
  match: {},
}

export default HomePage
