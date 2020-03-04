import React from 'react'
import PropTypes from 'prop-types'
import PostPreview from './postPreview'
import Lang from '../../gatsby-lang'
import './styles/posts.scss'

const Listing = ({ edges, limit }) => {
  return edges.map(edge => {
    const { timeToRead, excerpt } = edge.node
    const { slug, date, number } = edge.node.fields
    const { title, tags, blurb } = edge.node.frontmatter
    const tagCollection = tags ? tags.join(`,`) : ``
    return (
      <PostPreview
        key={slug}
        limit={limit}
        title={title}
        slug={slug}
        tags={tagCollection}
        date={date}
        ttr={timeToRead}
        number={number}
      >
        {blurb || excerpt}
      </PostPreview>
    )
  })
}

export const Posts = ({ edges, limit }) => {
  if (!edges || edges.length === 0) return <div>{Lang.noPostsAvailable}</div>

  return (
    <div className="posts">
      <Listing
        edges={edges}
        truncate={limit}
      />
    </div>
  )
}

Posts.defaultProps = {
  limit: 50,
}

Posts.propTypes = {
  edges: PropTypes.object.isRequired,
  limit: PropTypes.number,
}

export default Posts

//TODO: serious housekeeping required in this component
//TODO: move Lang to gatsby-config?
//TODO: somewhere the actual post needs to be rendered