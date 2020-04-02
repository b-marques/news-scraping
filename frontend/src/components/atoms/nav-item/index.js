import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.css'

const NavItem = props => {
  const { children, className, onClick, activeItem } = props
  const classProps = `${styles['nav-item']} ${className} ${
    activeItem === children ? styles.active : ''
  }`
  return (
    <Link className={classProps} to={`/${children}`} onClick={() => onClick(children)}>
      {children}
    </Link>
  )
}

NavItem.propTypes = {
  className: PropTypes.string,
  activeItem: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

NavItem.defaultProps = {
  className: '',
  activeItem: '',
  children: '',
  onClick: () => {},
}

export default NavItem
