import React from 'react'
import Post from './post'
import Lang from '../../gatsby-lang'

const truncate = 50

const Posts = ({ edges }) => {
  if (!edges || edges.length === 0) return <div>{Lang.noPostsAvailable}</div>

  return edges.map(edge => {
    const node = edge.node
    const field = node.fields
    const frontmatter = node.frontmatter
    const tags = frontmatter.tags.join(`,`)
    return (
      <Post 
        summary="true"
        limit={truncate}
        title={frontmatter.title}
        slug={field.slug}
        tags={tags}
        date={frontmatter.date}
        ttr={node.timeToRead}
      >
        {node.excerpt}
      </Post>
    )
  })
  
}

export default Posts