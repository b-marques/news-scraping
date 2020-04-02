import React from 'react'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'

const Link = props => {
  const { children, className, href, onClick } = props
  return (
    <ReactRouterLink className={className} to={href} onClick={onClick}>
      {children}
    </ReactRouterLink>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Link.defaultProps = {
  className: '',
  href: '#',
  children: '',
  onClick: () => {},
}

export default Link
