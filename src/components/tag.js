import React from 'react'
import Anchor from './anchor'
import './styles/tag.scss'

const Bare = ({ children }) => {
  return (
    <div
      data-container="bare-tag-element"
    >
      {children}
    </div>
  )
}

const Disabled = ({ children }) => {
  return (
    <div
      data-disabled="true"
      data-container="disabled-tag-element"
    >
      {children}
    </div>
  )
}

function Tag({ title, to, disabled, readonly }) {
  if (!title) return <></>

  const lowerTitle = title.toLowerCase()

  if (readonly)
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
      tag="true"
      className="tag anchor"
    >
      {lowerTitle}
    </Anchor>
  )
}

export default Tag

//TODO: add proptypes
//TODO: destroy data-component attribs
//TODO: rethink what tags are necessary