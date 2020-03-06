import React from 'react'
import PropTypes from 'prop-types'
import Number from './number'
import PostMetadata from './postMetadata'
import Tags from './tags'
import { H1 } from './heading'
import { SmallSpacer } from './spacer'
import "./styles/post.scss"

const Title = ({ children }) => {
  return (
    <H1>
      {children}
    </H1>
  )
}

const Body = ({ children }) => {
  return (
    typeof children === `string` ?
      <div
        className="reading-panel"
        dangerouslySetInnerHTML={{ __html: children }}
      >
      </div> :
      <div
        className="reading-panel"
      >
        {children}
      </div>
  )
}

const Metadata = ({ date, author, ttr }) => {
  return (
    <PostMetadata
      date={date}
      author={author}
      ttr={ttr}
    />
  )
}

function Post({ title, tags, date, author, ttr, number, children }) {
  return (
    <>
      <article
        className="post article"
      >
        <Number number={number} />
        <Title>
          {title}
        </Title>
        <Metadata
          date={date}
          author={author}
          ttr={ttr}
        />
        <Tags
          tags={tags}
        />
        <SmallSpacer />
        <Body>
          {children}
        </Body>
      </article>
    </>
  )
}

Post.defaultProps = {
  tags: ``,
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ttr: PropTypes.string.isRequired,
  number: PropTypes.number,
  tags: PropTypes.string,
}

export default Post
