import React from 'react'
import H1 from './h1'
import PostMetadata from './postMetadata'
import { Tag } from './tag'

function Post({ title, metadata, tags, post }) {
  const {moment, date, author, ttr} = metadata || {}
  return (
    <article>
      <H1 title={title} />
      <PostMetadata
        moment={moment}
        date={date}
        author={author}
        ttr={ttr}
      />
      <div>
        {(tags || []).map(tag => {
          return <Tag key={tag.name} tag={tag.name} slug={tag.slug} />
        })}
      </div>
      <div>
        {post}
      </div>
    </article>
  )
}

export default Post