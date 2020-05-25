import React from "react"
import PropTypes from "prop-types"
import { H2 } from "./heading"
import Number from "./number"
import PostMetadata from "./postMetadata"
import Tags from "./tags"
import Anchor from "./anchor"
import Blurb from "./blurb"
import Thumbnail from "./thumbnail"
import "../styles/preview.scss"

const Body = ({ children, wordLimit }) => {
  return (
    <div className="blurb">
      <Blurb wordLimit={wordLimit}>{children}</Blurb>
    </div>
  )
}

const Metadata = ({ date, author, timeToRead }) => {
  return (
    <>
      <div className="metadata">
        <PostMetadata date={date} author={author} timeToRead={timeToRead} />
      </div>
    </>
  )
}

const Heading = ({ children, slug }) => {
  return (
    <>
      <H2>
        <Anchor to={slug} title={children}>
          {children}
        </Anchor>
      </H2>
    </>
  )
}

function PostPreview({ wordLimit, edge, children }) {
  const author = `Clarice Bouwer`
  const { timeToRead } = edge
  const { slug, date, number } = edge.fields
  const {
    title,
    tags,
    photo,
    credit,
    creditSource,
    creditLink,
  } = edge.frontmatter
  return (
    <>
      <section className="post preview">
        <Number number={number} />
        <Thumbnail
          number={number}
          to={slug}
          photo={photo}
          credit={credit}
          source={creditSource}
          link={creditLink}
        />
        <div className="body">
          <Heading slug={slug}>{title}</Heading>
          <Body wordLimit={wordLimit}>{children}</Body>
          <Metadata date={date} author={author} timeToRead={timeToRead} />
          <Tags tags={tags} />
        </div>
      </section>
    </>
  )
}

PostPreview.propTypes = {
  edge: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  wordLimit: PropTypes.number,
}

export default PostPreview
