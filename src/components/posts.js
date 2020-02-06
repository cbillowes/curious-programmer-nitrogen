import React from 'react'
import Post from './post'
import Lang from '../../gatsby-lang'

const defaultTruncate = 50

const Posts = ({ edges, truncate, showNumbers, startAt }) => {
  if (!edges || edges.length === 0) return <div>{Lang.noPostsAvailable}</div>

  let index = (startAt || edges.length) +1
  return edges.map(edge => {
    const { html, timeToRead, excerpt } = edge.node
    const { slug, date } = edge.node.fields
    const { title, tags, blurb } = edge.node.frontmatter
    const tagCollection = tags ? tags.join(`,`) : ``
    index--
    return (
      <Post 
        key={slug}
        summary="true"
        limit={truncate ? truncate : defaultTruncate}
        title={title}
        slug={slug}
        tags={tagCollection}
        date={date}
        ttr={timeToRead}
        excerpt={blurb || excerpt}
        number={showNumbers? index : false}
      >
        {html}
      </Post>
    )
  })
  
}

export default Posts