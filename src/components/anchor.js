import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../styles/anchor.scss'

function isExternalLink(url) {
  return (url.startsWith(`http`) || url.startsWith(`mailto:`))
}

const ExternalLink = ({ to, title, className, children, ...props }) => {
  return (
    <>
      {" "}
      <a
        href={to}
        rel={`nofollow noopener noreferrer`}
        title={title}
        className={className}
        target={`_blank`}
        {...props}
      >
        {children}
      </a>
      {" "}
    </>
  )
}

const InternalLink = ({ to, title, className, children, ...props }) => {
  return (
    <>
      {" "}
      <Link
        to={to}
        title={title}
        className={className}
        {...props}
      >
        {children}
      </Link>
      {" "}
    </>
  )
}

function Anchor({ to, title, className, children, ...props }) {
  if (isExternalLink(to))
    return (
      <ExternalLink
        to={to}
        title={title}
        className={className}
        {...props}
      >
        {children}
      </ExternalLink>
    )

  return (
    <InternalLink
      to={to}
      title={title}
      className={className}
      {...props}
    >
      {children}
    </InternalLink>
  )
}

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Anchor
