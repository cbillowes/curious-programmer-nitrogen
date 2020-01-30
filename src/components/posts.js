import React from 'react'
import Post from './post'
import Lang from '../../gatsby-lang'

const defaultTruncate = 50

const Posts = ({ edges, truncate }) => {
  if (!edges || edges.length === 0) return <div>{Lang.noPostsAvailable}</div>

  return edges.map(edge => {
    const { html, timeToRead } = edge.node
    const { slug, date } = edge.node.fields
    const { title, tags, excerpt } = edge.node.frontmatter
    const tagCollection = tags ? tags.join(`,`) : ``
    return (
      <Post 
        summary="true"
        limit={truncate ? truncate : defaultTruncate}
        title={title}
        slug={slug}
        tags={tagCollection}
        date={date}
        ttr={timeToRead}
        excerpt={excerpt}
      >
        {html}
      </Post>
    )
  })
  
}

export default Posts