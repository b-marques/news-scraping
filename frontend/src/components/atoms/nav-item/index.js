import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.css'

const NavItem = props => {
  const { children, className, onClick, activeItem } = props
  const classProps = `${styles['nav-item']} ${className} ${
    activeItem === children ? styles.active : ''
  }`
  return (
    <Link className={classProps} to={`/${children}`}>
      <span onClick={() => onClick(children)}>{children}</span>
    </Link>
  )
}

NavItem.defaultProps = {
  className: '',
  children: '',
  onClick: () => {},
}

export default NavItem
