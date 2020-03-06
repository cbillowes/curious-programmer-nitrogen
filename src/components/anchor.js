import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './styles/anchor.scss'

function isExternalLink(url) {
  return (url.startsWith(`http`) || url.startsWith(`mailto:`))
}

const ExternalLink = ({ to, title, className, children }) => {
  return (
    <>
      {" "}
      <a
        href={to}
        rel={`nofollow noopener noreferrer`}
        title={title}
        className={className}
        target={`_blank`}
      >
        {children}
      </a>
      {" "}
    </>
  )
}

const InternalLink = ({ to, title, className, children }) => {
  return (
    <>
      {" "}
      <Link
        to={to}
        title={title}
        className={className}
      >
        {children}
      </Link>
      {" "}
    </>
  )
}

function Anchor({ to, title, className, children }) {
  if (isExternalLink(to))
    return (
      <ExternalLink
        to={to}
        title={title}
        className={className}
      >
        {children}
      </ExternalLink>
    )

  return (
    <InternalLink
      to={to}
      title={title}
      className={className}
    >
      {children}
    </InternalLink>
  )
}

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Anchor
