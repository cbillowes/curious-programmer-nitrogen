import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'

function Tags({ tags }) {
  if (!Array.isArray(tags)) return <></>

  return (
    <>
      <div
        className="tags"
      >
        {
          tags.map(tag => {
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
  tags: PropTypes.array.isRequired,
}

export default Tags
