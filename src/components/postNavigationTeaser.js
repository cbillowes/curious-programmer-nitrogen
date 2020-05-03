import React from "react"
import PropTypes from "prop-types"
import { H1 } from "./heading"
import Anchor from "./anchor"
import PostMetadata from "./postMetadata"
import Tags from "./tags"
import Blurb from "./blurb"
import "../styles/postNavigation.scss"

const defaultWordLimit = 15

const Heading = ({ title }) => {
  return <H1>{title}</H1>
}

const Body = ({ wordLimit, excerpt }) => {
  return (
    <div className="body">
      <Blurb wordLimit={wordLimit}>{excerpt || ``}</Blurb>
    </div>
  )
}

const Metadata = ({ date, author, ttr }) => {
  return <PostMetadata date={date} author={author} ttr={ttr} />
}

const Navigation = ({ post }) => {
  const { slug, title, excerpt, wordLimit, date, author, ttr, tags } = post
  const limit = wordLimit || defaultWordLimit
  return (
    <>
      <Anchor to={slug} title={title} className="nav-link">
        <Heading slug={slug} title={title} />
        <Body slug={slug} title={title} wordLimit={limit} excerpt={excerpt} />
        <Metadata
          slug={slug}
          title={title}
          date={date}
          author={author}
          ttr={ttr}
        />
      </Anchor>
      <Tags tags={tags} />
    </>
  )
}

const PostNavigationTeaser = ({ previous, next }) => {
  if (!(previous && next)) return <></>

  return (
    <>
      <nav className="post navigation teaser">
        <aside className="previous">
          <Navigation post={previous} />
        </aside>
        <aside className="next">
          <Navigation post={next} />
        </aside>
      </nav>
    </>
  )
}

const shape = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  wordLimit: PropTypes.number,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ttr: PropTypes.number.isRequired,
  tags: PropTypes.array,
})

PostNavigationTeaser.propTypes = {
  previous: shape,
  next: shape,
}

export default PostNavigationTeaser
