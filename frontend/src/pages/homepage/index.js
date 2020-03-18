import React from 'react'
import '_styles/styles.css'

import NavBar from '_molecules/nav-bar'
import News, { NewsTheme } from '_organisms/news'
import Divider from '_atoms/divider'
import Message, { MessageTheme } from '_atoms/message'
import Loader from '_atoms/loader'
import view from '_templates/homepage/styles.css'

import { http } from '_utils/http'

const FeaturedNews = [0]
const HeadlineNews = [1, 2]
const DefaultNews = [3, 4, 5]

class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      hasError: false,
      articles: [],
    }
  }

  buildNews = (position, theme) => (
    <News
      key={position}
      tag={this.state.articles[position].subject.name}
      button="Read More"
      title={this.state.articles[position].title}
      authorName={this.state.articles[position].author.name}
      authorImage={this.state.articles[position].author.picture}
      text={this.state.articles[position].text}
      image={this.state.articles[position].hero_image}
      theme={theme}
    />
  )

  getArticles() {
    const subject = this.props.match.params.subject || ''
    this.setState({ isLoading: true })
    http
      .get('articles/' + subject)
      .then(response =>
        setTimeout(
          () =>
            this.setState({ isLoading: false, hasError: false, articles: response.data.results }),
          1000
        )
      )
      .catch(error => this.setState({ isLoading: false, hasError: true, articles: [] }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.subject !== prevProps.match.params.subject) {
      this.getArticles()
    }
  }

  componentDidMount() {
    this.getArticles()
  }

  buildContent = () => {
    if (this.state.hasError)
      return <Message theme={MessageTheme.ERROR}>Something went wrong!</Message>
    if (this.state.isLoading) return <Loader>Loading</Loader>
    if (this.state.articles.length == 0)
      return <Message theme={MessageTheme.WARNING}>Theres is no news to display!</Message>
    return (
      <div className={view.default}>
        <div className={view.navbar}></div>
        <div className={view.featured}>
          {FeaturedNews.map(i => {
            return this.state.articles[i] && this.buildNews(i, NewsTheme.FEATURED)
          })}
        </div>
        <div className={view.headlines}>
          {HeadlineNews.map(i => {
            return this.state.articles[i] && this.buildNews(i, NewsTheme.HEADLINE)
          })}
        </div>
        <div className={view.divider}>
          <Divider />
        </div>
        <div className={view.defaults}>
          {DefaultNews.map(i => {
            return this.state.articles[i] && this.buildNews(i, NewsTheme.DEFAULT)
          })}
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <NavBar />
        {this.buildContent()}
      </>
    )
  }
}

export default Homepage
