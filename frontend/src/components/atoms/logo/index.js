import React from 'react'
import PropTypes from 'prop-types'

import logo from '_images/logo.png'
import logo2x from '_images/logo@2x.png'

import styles from './styles.css'

const isRetina = (first, second) => {
  if (window.devicePixelRatio >= 2) {
    return second
  }
  return first
}

const Logo = props => {
  const { className } = props
  const classProps = `${className} ${styles.image}`
  return (
    <a className={classProps} href="/">
      <img className={styles.image} alt="logo" src={`/${isRetina(logo, logo2x)}`} />
    </a>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
}

Logo.defaultProps = {
  className: '',
}

export default Logo
