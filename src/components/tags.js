import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'

function Tags({ tags }) {
  if (!tags) return <></>

  return (
    <>
      <div
        className="tags"
      >
        {tags.split(`,`).map(tag => {
          return (
            <Tag
              key={tag}
              to={`/tag/${_.kebabCase(tag)}`}
              title={tag}
            />
          )
        })}
      </div>
    </>
  )
}

Tags.propTypes = {
  tags: PropTypes.string,
}

export default Tags
