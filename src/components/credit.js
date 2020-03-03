import React from 'react'
import Tag from './tag'

const Credit = ({ to, title, children }) => {
  const body = children || title

  if (to) {
    return (
      <div>
        <Tag
          title={title}
          to={to}
        />
        {body}
      </div>
    )
  }
  return (
    <div>
      <Tag
        title={title}
      />
      {body}
    </div>
  )
}

export default Credit

//TODO: add proptypes
