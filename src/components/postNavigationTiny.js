import React from 'react'
import { H1 } from './heading'
import Anchor from './anchor'
import Blurb from './blurb'
import './styles/postNavigation.scss'

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
        <Blurb
          limit={limit}
        >
          {title}
        </Blurb>
      </Anchor>
    </H1>
  )
}

function PostNavigationTiny({ previous, next }) {
  return (
    <>
      <nav
        className="post navigation tiny"
        data-component="post-navigation-tiny"
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

export default PostNavigationTiny

//TODO: destroy data-component attribs
//TODO: add proptypes