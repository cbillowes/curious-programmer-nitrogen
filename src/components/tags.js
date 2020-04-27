import _ from "lodash"
import React from "react"
import PropTypes from "prop-types"
import Tag from "./tag"
import "../styles/tags.scss"

function getListOfTags(tags) {
  const flattened = [].concat(...(tags || []))
  return [...new Set(flattened)].sort()
}

const Collection = ({ tags }) => {
  return tags.map(tag => {
    return (
      <Tag
        key={tag}
        to={`/tag/${_.kebabCase(tag.toLowerCase())}/`}
        title={tag}
      />
    )
  })
}

const Tags = ({ tags }) => {
  const listOfTags = getListOfTags(tags)
  return (
    <div className="tags">
      <Collection tags={listOfTags} />
    </div>
  )
}

export const getTagsFromEdges = edges => {
  return edges
    .map(item => item.node.frontmatter)
    .map(item => item.tags)
    .map(item => (item ? item : []))
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default Tags
