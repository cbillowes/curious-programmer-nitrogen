import React from 'react'
import PropTypes from 'prop-types'
import Anchor from './anchor'
import './styles/tag.scss'

const Bare = ({ children }) => {
  return (
    <span>
      {children}
    </span>
  )
}

const Disabled = ({ children }) => {
  return (
    <span
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
      <Bare className="tag bare">
        {lowerTitle}
      </Bare>
    )

  if (disabled)
    return (
      <Disabled className="tag disabled">
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

//TODO: rethink what tags are necessary
//TODO: Make title only inline