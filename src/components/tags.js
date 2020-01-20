import React from 'react'
import Tag from './tag'

function Tags ({ tags }) {
  if (!tags) return <span></span>

  const renderable = tags.split(`,`)
  return (
    <>
      <div data-component="tags">
        {renderable.map(tag => {
          return (
            <Tag
              key={tag}
              title={tag}
            />
          )
        })}
      </div>
    </>
  )
}

export default Tags
