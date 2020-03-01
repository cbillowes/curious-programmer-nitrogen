import React from 'react'
import { H1 } from './heading'
import Anchor from './anchor'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Text from './text'
import './styles/postNavigation.scss'

const defaultTruncationLimit = 250

const Heading = ({ title }) => {
  return (
    <H1>
      {title}
    </H1>
  )
}

const Body = ({ limit, excerpt }) => {
  return (
    <div
      className="body"
    >
      <Text
        limit={limit}
      >
        {excerpt || ``}
      </Text>
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

const Navigation = ({ post }) => {
  const { slug, title, excerpt, limitExcerpt, date, author, ttr, tags } = post
  const limit = limitExcerpt || defaultTruncationLimit
  return (
    <>
      <Anchor
        to={slug}
        title={title}
        className="nav-link"
      >
        <Heading
          slug={slug}
          title={title}
        />
        <Body
          slug={slug}
          title={title}
          limit={limit}
          excerpt={excerpt}
        />
        <Metadata
          slug={slug}
          title={title}
          date={date}
          author={author}
          ttr={ttr}
        />
      </Anchor>
      <Tags
        tags={tags}
      />
    </>
  )
}

function PostNavigationTeaser({ previous, next }) {
  return (
    <>
      <nav
        className="post navigation teaser"
        data-component="post-navigation-teaser"
      >
        <aside
          className="previous"
          data-component="post-navigation-previous"
        >
          <Navigation
            post={previous}
          />
        </aside>
        <aside
          className="next"
          data-component="post-navigation-next"
        >
          <Navigation
            post={next}
          />
        </aside>
      </nav>
    </>
  )
}

export default PostNavigationTeaser