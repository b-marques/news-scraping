import React, { useState, useEffect } from 'react'
import styles from './styles.css'

import NavItem from '_atoms/nav-item'
import Logo from '_atoms/logo'
import NavButton from '_atoms/nav-button'

const NavBar = props => {
  const { children, className } = props
  const [isExpanded, setExpanded] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 992px)')
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsLargeScreen(true)
    } else {
      setIsLargeScreen(false)
    }
  }

  const classProps = `${styles['nav-bar']} ${className}`
  return (
    <div className={classProps}>
      <NavButton className={styles.button} onClick={() => setExpanded(!isExpanded)} />
      <Logo className={styles.logo} />
      {(isLargeScreen || isExpanded) && (
        <div className={styles.navitems}>
          <NavItem>Politics</NavItem>
          <NavItem>Businesss</NavItem>
          <NavItem>Tech</NavItem>
          <NavItem>Science</NavItem>
          <NavItem>Sports</NavItem>
        </div>
      )}
    </div>
  )
}

NavBar.defaultProps = {
  className: '',
  children: '',
}

export default NavBar
