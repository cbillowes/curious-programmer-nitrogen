import React from 'react'
import { H1 } from './heading'
import PostMetadata from './postMetadata'
import Tag from './tag'

function Post({ title, metadata, tags, children }) {
  const {moment, date, author, ttr} = metadata || {}
  return (
    <article>
      <H1>
        {title}
      </H1>
      <PostMetadata
        moment={moment}
        date={date}
        author={author}
        ttr={ttr}
      />
      <div>
        {(tags || []).map(tag => {
          return (
            <Tag 
              key={tag.name} 
              title={tag.name} 
              to={tag.slug}
            />
          )
        })}
      </div>
      <div>
        {children}
      </div>
    </article>
  )
}

export default Post