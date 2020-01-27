import React from 'react'
import styled from 'styled-components'
import { H1 } from './heading'
import Anchor from './anchor'
import Text from './text'
import Constants from '../../gatsby-data'

const colors = Constants.theme.colors
const limit = 5

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  section {
    flex-grow: 1;
    flex-basis: 50%;

    h1 {
      font-size: 60%;

      a {
        border: none;
        color: ${colors.fence};
        &:hover {
          color: ${colors.accentFirst};
          background-color: transparent;
        }
      }
    }
  }
`

const PreviousItemContainer = styled.section`
  a:before {
    content: "\u27FB ";
    font-size: 130%;
  }
`

const NextItemContainer = styled.section`
  text-align: right;
  a:after {
    content: " \u27FC";
    font-size: 130%;
  }
`

function navigateToPost(post) {
  if (!post) return <></>

  return (
    <>
      <section>
        <H1>
          <Anchor
            to={post.slug}
            title={post.title}
          >
            <Text
              limit={limit}
            >
              {post.title}
            </Text>
          </Anchor>
        </H1>
      </section>
    </>
  )
}

function PostNavigationTiny({ previous, next }) {
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

export default PostNavigationTiny