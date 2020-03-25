import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from './heading'
import Number from './number'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Anchor from './anchor'
import Blurb from './blurb'
import '../styles/preview.scss'

const Body = ({ children, limit }) => {
  return (
    <div
      className="blurb"
    >
      <Blurb
        limit={limit}
      >
        {children}
      </Blurb>
    </div>
  )
}

const Metadata = ({ date, author, ttr }) => {
  return (
    <>
      <div
        className="metadata"
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

const Heading = ({ children, slug }) => {
  return (
    <>
      <H1>
        <Anchor
          to={slug}
          title={children}
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
      >
        <Number
          number={number}
        />
        <Heading
          slug={slug}
        >
          {title}
        </Heading>
        <Body
          limit={limit}
        >
          {children}
        </Body>
        <Metadata
          date={date}
          author={author}
          ttr={ttr}
        />
        <Tags
          tags={tags}
        />
      </section>
    </>
  )
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ttr: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  number: PropTypes.number,
  limit: PropTypes.number,
}

export default PostPreview
