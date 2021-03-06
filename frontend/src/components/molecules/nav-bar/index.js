import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import NavItem from '_atoms/nav-item'
import Logo from '_atoms/logo'
import NavButton from '_atoms/nav-button'

import styles from './styles.css'

const NavBar = props => {
  const { className, items, activeItem } = props
  const [isExpanded, setExpanded] = useState(false)
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

  return (
    <div className={classProps}>
      <NavButton className={styles.button} onClick={() => setExpanded(!isExpanded)} />
      <Logo className={styles.logo} />
      {(isLargeScreen || isExpanded) && (
        <div className={styles.navitems}>
          {items.map(item => (
            <NavItem key={`navitem:${item}`} activeItem={activeItem}>
              {item}
            </NavItem>
          ))}
        </div>
      )}
    </div>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  activeItem: PropTypes.string,
}

NavBar.defaultProps = {
  className: '',
  items: [],
  activeItem: '',
}

export default NavBar
