import React from 'react'
import { H1 } from './heading'
import Number from './number'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Anchor from './anchor'
import Text from './text'
import "./styles/preview.scss"

const Blurb = ({ children, limit }) => {
  return (
    <div
      className="blurb"
      data-component="post-preview-blurb"
    >
      <Text limit={limit}>
        {children}
      </Text>
    </div>
  )
}

const Metadata = ({ date, author, ttr }) => {
  return (
    <>
      <div
        className="metadata"
        data-component="post-preview-metadata"
      >
        <PostMetadata
          date={date}
          author={author}
          ttr={ttr}
        />
      </div>
    </>
  )
}

const TagList = ({ tags }) => {
  return (
    <>
      <div
        className="tags"
        data-component="post-preview-tags"
      >
        <Tags
          tags={tags}
        />
      </div>
    </>
  )
}

const Heading = ({ children, slug }) => {
  return (
    <>
      <H1>
        <Anchor
          to={slug}
          title={children}
          unstyled={true}
        >
          {children}
        </Anchor>
      </H1>
    </>
  )
}

function PostPreview({ title, slug, tags, date, author, ttr, number, limit, children }) {
  return (
    <>
      <section
        className="post preview"
        data-component="post-preview"
      >
        <Number number={number} />
        <Heading slug={slug}>
          {title}
        </Heading>
        <Blurb limit={limit}>
          {children}
        </Blurb>
        <Metadata date={date} author={author} ttr={ttr} />
        <TagList tags={tags} />
      </section>
    </>
  )
}

export default PostPreview