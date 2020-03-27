import React from 'react'
import PropTypes from 'prop-types'
import Anchor from './anchor'
import '../styles/tag.scss'

const Bare = ({ children }) => {
  return (
    <span className="tag bare">
      {children}
    </span>
  )
}

const Disabled = ({ children }) => {
  return (
    <span
      className="tag disabled"
      data-disabled="true"
    >
      {children}
    </span>
  )
}

const Tag = ({ title, to, disabled }) => {
  const lowerTitle = title.toLowerCase()

  if (!to)
    return (
      <Bare>
        {lowerTitle}
      </Bare>
    )

  if (disabled)
    return (
      <Disabled>
        {lowerTitle}
      </Disabled>
    )

  return (
    <Anchor
      to={to}
      title={title}
      className="tag"
    >
      {lowerTitle}
    </Anchor>
  )
}

Tag.defaultProps = {
  disabled: false,
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Tag
