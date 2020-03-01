import React from 'react'
import PostPreview from './postPreview'
import Lang from '../../gatsby-lang'
import './styles/posts.scss'

const defaultTruncate = 50

const Listing = ({ edges, truncate }) => {
  return edges.map(edge => {
    const { timeToRead, excerpt } = edge.node
    const { slug, date, number } = edge.node.fields
    console.log(edge.node)
    const { title, tags, blurb } = edge.node.frontmatter
    const tagCollection = tags ? tags.join(`,`) : ``
    return (
      <PostPreview
        key={slug}
        limit={truncate ? truncate : defaultTruncate}
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

const Posts = ({ edges, truncate }) => {
  if (!edges || edges.length === 0) return <div>{Lang.noPostsAvailable}</div>

  return (
    <div className="posts">
      <Listing
        edges={edges}
        truncate={truncate}
      />
    </div>
  )
}

export default Posts