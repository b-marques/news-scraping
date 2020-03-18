import React from 'react'
import styles from './styles.css'

const NavItem = props => {
  const { children, className, onClick, activeItem } = props
  const classProps = `${styles['nav-item']} ${className} ${
    activeItem === children ? styles.active : ''
  }`
  return (
    <a className={classProps} href="#">
      <span onClick={() => onClick(children)}>{children}</span>
    </a>
  )
}

NavItem.defaultProps = {
  className: '',
  children: '',
  onClick: () => {},
}

export default NavItem
