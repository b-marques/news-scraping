import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import NavItem from '_atoms/nav-item'
import Logo from '_atoms/logo'
import NavButton from '_atoms/nav-button'

import styles from './styles.css'

const NavBar = props => {
  const { className } = props
  const [isExpanded, setExpanded] = useState(false)
  const [activeItem, setActive] = useState('')
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const classProps = `${styles['nav-bar']} ${className}`

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsLargeScreen(true)
    } else {
      setIsLargeScreen(false)
    }
  }

  /* Reset navitems visibility after resize */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 992px)')
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleClick = subject => {
    setActive(subject)
  }

  return (
    <div className={classProps}>
      <NavButton className={styles.button} onClick={() => setExpanded(!isExpanded)} />
      <Logo className={styles.logo} />
      {(isLargeScreen || isExpanded) && (
        <div className={styles.navitems}>
          <NavItem onClick={handleClick} activeItem={activeItem}>
            politics
          </NavItem>
          <NavItem onClick={handleClick} activeItem={activeItem}>
            business
          </NavItem>
          <NavItem onClick={handleClick} activeItem={activeItem}>
            tech
          </NavItem>
          <NavItem onClick={handleClick} activeItem={activeItem}>
            science
          </NavItem>
          <NavItem onClick={handleClick} activeItem={activeItem}>
            sports
          </NavItem>
        </div>
      )}
    </div>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
}

NavBar.defaultProps = {
  className: '',
}

export default NavBar
