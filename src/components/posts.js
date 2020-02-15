import React from 'react'
import PostPreview from './postPreview'
import Lang from '../../gatsby-lang'
import './styles/posts.scss'

const defaultTruncate = 50

const Listing = ({ edges, truncate, startAt }) => {
  let index = (startAt || edges.length) + 1
  return edges.map(edge => {
    const { timeToRead, excerpt } = edge.node
    const { slug, date } = edge.node.fields
    const { title, tags, blurb } = edge.node.frontmatter
    const tagCollection = tags ? tags.join(`,`) : ``
    index--
    return (
      <PostPreview 
        key={slug}
        limit={truncate ? truncate : defaultTruncate}
        title={title}
        slug={slug}
        tags={tagCollection}
        date={date}
        ttr={timeToRead}
        number={index}
      >
        {blurb || excerpt}
      </PostPreview>
    )
  })
}

const Posts = ({ edges, truncate, startAt }) => {
  if (!edges || edges.length === 0) return <div>{Lang.noPostsAvailable}</div>

  return (
    <div className="posts">
      <Listing 
        edges={edges}
        truncate={truncate}
        startAt={startAt}
      />
    </div>
  )
}

export default Posts