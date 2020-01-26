import React from 'react'
import styled from 'styled-components'
import { H1 } from './heading'
import Anchor from './anchor'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Text from './text'
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
    margin-top: 3%;

    h1 {
      font-size: 80%;
    }

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

function navigateToPost(post) {
  if (!post) return <></>

  const limit = post.limitExcerpt || defaultTruncationLimit
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
          <Text
            limit={limit}
          >
            {post.excerpt || ``}
          </Text>
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