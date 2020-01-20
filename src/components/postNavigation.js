import React from 'react'
import styled from 'styled-components'
import { H1 } from './heading'
import Anchor from './anchor'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Constants from '../../gatsby-data'

const defaultTruncationLimit = 250
const colors = Constants.theme.colors

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  section {
    flex-grow: 1;
    flex-basis: 50%;
    margin: 3% 0;

    .postNavigationMetadata {
      color: ${colors.fence};
    }
  }
`

const PreviousItemContainer = styled.section`
  padding-right: 3%;
  padding-left: 10%;

  h1, p, div, span {
    text-align: right;
  }

  span {
    display: inline-block;
  }
`

const NextItemContainer = styled.section`
  padding-left: 3%;
  padding-right: 10%;
`

function truncate(sentence, limit) {
  if (!sentence) return ``

  const words = sentence.trim().split(` `)
  return (
    (
      words.length > limit ? 
      words.splice(0, limit) : 
      words
    ).join(` `)
  )
}

function ellipsies(sentence, limit) {
  if (!sentence) return ``

  const words = sentence.trim().split(` `)
  return (
    words.length > limit ?
    `...` : 
    ``
  )
}

function getSentence(sentence, limit) {
  const truncated = truncate(sentence, limit)
  const more = ellipsies(sentence, limit)
  return `${truncated}${more}`
}

function navigateToPost(post) {
  if (!post) return <></>

  const limit = post.limitExcerpt || defaultTruncationLimit
  const excerpt = getSentence(post.excerpt || ``, limit)

  return (
    <>
      <section>
        <H1>
          <Anchor
            to={post.slug}
            title={post.title}
          >
            {post.title}
          </Anchor>
        </H1>
        <Anchor
          to={post.slug}
          title={post.title}
          bland={true}
          style={{
            textDecoration: `none`,
            color: colors.light,
          }}
        >
          <span>
            {excerpt}
          </span>
        </Anchor>
        <div className="postNavigationMetadata">
          <Anchor
            to={post.slug}
            title={post.title}
            bland={true}
            style={{
              textDecoration: `none`,
              color: colors.fence,
            }}
          >
            <PostMetadata
              date={post.date}
              author={post.author}
              ttr={post.ttr}
            />
          </Anchor>
        </div>
      </section>
      <Tags
        tags={post.tags}
      />
    </>
  )
}

function PostNavigation({ previous, next }) {
  return (
    <>
      <Container>
        <PreviousItemContainer>
          {navigateToPost(previous)}
        </PreviousItemContainer>
        <NextItemContainer>
          {navigateToPost(next)}
        </NextItemContainer>
      </Container>
    </>
  )
}

export default PostNavigation