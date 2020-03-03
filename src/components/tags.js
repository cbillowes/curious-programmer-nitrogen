import React from 'react'
import Tag from './tag'

function Tags({ tags }) {
  if (!tags) return <span></span>

  const renderable = Array.isArray(tags) ? tags : tags.split(`,`)
  return (
    <>
      <div
        className="tags"
      >
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

//TODO: add proptypes