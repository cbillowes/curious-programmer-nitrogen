import React from 'react'
import H1 from './h1'
import PostMetadata from './postMetadata'
import { Tag } from './tag'

function Post({ title, metadata, tags, children }) {
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
          return <Tag key={tag.name} title={tag.name} slug={tag.slug} />
        })}
      </div>
      <div>
        {children}
      </div>
    </article>
  )
}

export default Post