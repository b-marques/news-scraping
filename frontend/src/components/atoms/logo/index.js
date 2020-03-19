import React from 'react'

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
  const classProps = `${styles.logo} ${className}`
  return (
    <a href="/" className={classProps}>
      <img src={isRetina(logo, logo2x)} />
    </a>
  )
}

Logo.defaultProps = {
  className: '',
}

export default Logo
