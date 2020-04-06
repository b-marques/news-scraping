import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import '_styles/styles.css'

import NavBar from '_molecules/nav-bar'
import HomeNews, { HomeNewsTheme } from '_organisms/home-news'
import Message, { MessageTheme } from '_atoms/message'
import Loader, { LoaderSize } from '_atoms/loader'
import view from '_templates/home/styles.css'
import { http } from '_utils/http'
import navItems from '_utils/navItems'
import Link from '_atoms/link'

const { MEDIA_URL } = process.env

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      hasError: false,
      hasMore: true,
      articles: [],
      page: 1,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', _.debounce(() => this.handleScroll(), 100), true)
    this.getArticles()
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { subject: actualSubject },
      },
    } = this.props

    const {
      match: {
        params: { subject: previousSubject },
      },
    } = prevProps
    this.updateStateIfSubjectChanged(actualSubject, previousSubject)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true)
  }

  getArticles() {
    let {
      match: {
        params: { subject },
      },
    } = this.props
    const { page, articles } = this.state
    subject = subject || ''
    this.setState({ isLoading: true })

    http
      .get(`articles/${subject}?page=${page}`)
      .then(response =>
        setTimeout(
          () =>
            this.setState({
              isLoading: false,
              hasError: false,
              hasMore: articles.length + response.data.limit < response.data.count,
              articles: [...articles, ...response.data.results],
              page: page + 1,
              subject,
            }),
          1000
        )
      )
      .catch(() =>
        this.setState({
          isLoading: false,
          hasError: true,
          articles: [],
          page: 1,
          subject: '',
        })
      )
  }

  handleScroll = () => {
    const { hasError, isLoading, hasMore } = this.state
    if (hasError || isLoading || !hasMore) return
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getArticles()
    }
  }

  buildNews = (position, theme) => {
    const { articles } = this.state
    const { subject, title, author, text, id, slug } = articles[position]
    const heroImage = articles[position].hero_image

    return (
      <Link key={position} href={`/article/${id}/${slug}`}>
        <HomeNews
          tag={subject.name}
          button="Read More"
          title={title}
          authorName={author.name}
          authorImage={MEDIA_URL + author.picture}
          text={text}
          image={MEDIA_URL + heroImage}
          theme={theme}
        />
      </Link>
    )
  }

  buildContent = () => {
    const { hasError, isLoading, articles, page } = this.state

    if (hasError) return <Message theme={MessageTheme.ERROR}>Something went wrong!</Message>
    if (isLoading && page === 1) return <Loader size={LoaderSize.LARGE}>Loading</Loader>
    if (articles.length === 0)
      return <Message theme={MessageTheme.WARNING}>Theres is no news to display!</Message>

    const FeaturedNews = _.range(0, 1).map(
      i => articles[i] && this.buildNews(i, HomeNewsTheme.FEATURED)
    )
    const HeadlineNews = _.range(1, 4).map(
      i => articles[i] && this.buildNews(i, HomeNewsTheme.HEADLINE)
    )
    const HeadlineNews2 = _.range(4, 6).map(
      i => articles[i] && this.buildNews(i, HomeNewsTheme.HEADLINE)
    )
    const DefaultNews = _.range(6, articles.length).map(
      i => articles[i] && this.buildNews(i, HomeNewsTheme.DEFAULT)
    )
    return (
      <>
        <div className={view.default}>
          <div className={view.navbar} />
          <div className={view.featured}>{FeaturedNews}</div>
          <div className={view.headlines}>{HeadlineNews}</div>
          <div className={view.headlines2}>{HeadlineNews2}</div>
          <div className={view.defaults}>{DefaultNews}</div>
        </div>
        {isLoading && <Loader>Loading</Loader>}
      </>
    )
  }

  updateStateIfSubjectChanged(actualSubject, previousSubject) {
    if (actualSubject !== previousSubject) {
      this.setState({ articles: [], page: 1, subject: actualSubject }, this.getArticles)
    }
  }

  render() {
    const { subject } = this.state
    return (
      <>
        <NavBar items={navItems} activeItem={subject} />
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
