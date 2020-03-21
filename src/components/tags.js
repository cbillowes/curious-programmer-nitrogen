import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'
import '../styles/tags.scss'

const Collection = ({ tags }) => {
  return (tags || []).map(tag => {
    return (
      <Tag
        key={tag}
        to={`/tag/${_.kebabCase(tag.toLowerCase())}`}
        title={tag}
      />
    )
  })
}

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      <Collection
        tags={tags}
      />
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default Tags

//TODO: find out why the production build fails - map is not a function for tags
