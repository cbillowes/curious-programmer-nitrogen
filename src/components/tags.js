import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'

function Tags({ tags }) {
  if (!tags) return <></>
  const collection = Array.isArray(tags) ? tags : tags.split(`,`)

  return (
    <>
      <div
        className="tags"
      >
        {
          collection.map(tag => {
            return (
              <Tag
                key={tag}
                to={`/tag/${_.kebabCase(tag)}`}
                title={tag}
              />
            )
          })
        }
      </div>
    </>
  )
}

Tags.propTypes = {
  tags: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}

export default Tags
