import React from 'react'

import navButton from '_images/menu.png'
import navButton2x from '_images/menu@2x.png'

import styles from './styles.css'

const isRetina = (first, second) => {
  if (window.devicePixelRatio >= 2) {
    return second
  }
  return first
}

const NavButton = props => {
  const { className, onClick } = props
  const classProps = `${styles['nav-button']} ${className}`
  return (
    <img
      className={classProps}
      src={isRetina(navButton, navButton2x)}
      alt="Nav Buton"
      onClick={onClick}
    />
  )
}

NavButton.defaultProps = {
  className: '',
  onClick: () => {},
}

export default NavButton
