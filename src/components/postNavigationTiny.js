import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from './heading'
import Anchor from './anchor'
import Text from './blurb'
import '../styles/postNavigation.scss'

const limit = 5

const Navigation = ({ post }) => {
  if (!post) return <></>

  const { slug, title } = post
  return (
    <H1>
      <Anchor
        to={slug}
        title={title}
        className="nav-link"
      >
        <Text
          limit={limit}
        >
          {title}
        </Text>
      </Anchor>
    </H1>
  )
}

function PostNavigationTiny({ previous, next }) {
  return (
    <>
      <nav
        className="post navigation tiny"
      >
        <aside
          className="previous"
        >
          <Navigation
            post={previous}
          />
        </aside>
        <aside
          className="next"
        >
          <Navigation
            post={next}
          />
        </aside>
      </nav>
    </>
  )
}

PostNavigationTiny.propTypes = {
  previous: PropTypes.object.isRequired,
  next: PropTypes.object.isRequired,
}

export default PostNavigationTiny
