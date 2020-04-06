import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const LoaderSize = {
  LARGE: 'large',
  MEDIUM: 'medium',
}

const Loader = props => {
  const { className, size } = props
  const classProps = `${styles.loader} ${styles[size]} ${className}`
  return (
    <h1 className={classProps}>
      Loading
      <span className={styles.dot}>.</span>
      <span className={styles.dot}>.</span>
      <span className={styles.dot}>.</span>
    </h1>
  )
}

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

Loader.defaultProps = {
  className: '',
  size: LoaderSize.MEDIUM,
}

export default Loader
