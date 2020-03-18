import React from 'react'
import styles from './styles.css'

const NavItem = props => {
  const { children, className, onClick } = props
  const classProps = `${styles['nav-item']} ${className}`
  return (
    <span onClick={onClick} className={classProps}>
      {children}
    </span>
  )
}

NavItem.defaultProps = {
  className: '',
  children: '',
  onClick: () => {},
}

export default NavItem
