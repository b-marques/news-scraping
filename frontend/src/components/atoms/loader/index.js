import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Loader = props => {
  const { className } = props
  const classProps = `${styles.loader} ${className}`
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
}

Loader.defaultProps = {
  className: '',
}

export default Loader
