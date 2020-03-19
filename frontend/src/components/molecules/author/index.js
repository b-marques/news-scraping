import React from 'react'
import PropTypes from 'prop-types'

import AuthorName from '_atoms/author-name'
import AuthorImage, { AuthorImageSize } from '_atoms/author-image'

import styles from './styles.css'

export const AuthorTheme = {
  FEATURED: 'featured',
  DEFAULT: 'default',
}

const Author = props => {
  const { className, authorName, authorImage, theme } = props
  const classProps = `${styles.author} ${className}`
  return (
    <div className={classProps}>
      {theme === AuthorTheme.FEATURED && (
        <>
          <AuthorImage image={authorImage} size={AuthorImageSize.LARGE} />
          <AuthorName>{authorName}</AuthorName>
        </>
      )}
      {theme === AuthorTheme.DEFAULT && (
        <>
          <AuthorImage image={authorImage} size={AuthorImageSize.MEDIUM} />
          <AuthorName>{authorName}</AuthorName>
        </>
      )}
    </div>
  )
}

Author.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
}

Author.defaultProps = {
  className: '',
  theme: AuthorTheme.DEFAULT,
  authorName: '',
  authorImage: '',
}

export default Author
