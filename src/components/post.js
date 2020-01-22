import React from 'react'
import styled from 'styled-components'
import { H1 } from './heading'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Anchor from './anchor'
import Text from './text'
import Constants from '../../gatsby-data'

const colors = Constants.theme.colors
const Container = styled.article`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 0;

  h1 {
    text-align: center;
  }
`

const TopMetadataContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 80%;
`

const BottomMetadataContainer = styled.div`
  text-align: right;
  font-size: 80%;
  color: ${colors.fence};

  .tags {
    text-align: center;
  }
`

const TagsContainer = styled.div`
  margin-top: .75rem;
`

function metadataComponent(date, author, ttr) {
  return (
    <>
      <PostMetadata
        date={date}
        author={author}
        ttr={ttr}
      />
    </>
  )
}

function tagsComponent(tags) {
  return (
    <>
      <TagsContainer className="tags">
        <Tags
          tags={tags}
        />
      </TagsContainer>
    </>
  )
}

function postHeadingComponent(title, slug) {
  const style = {
    color: colors.light,
    textDecoration: `none`,
    borderBottom: `solid 1px ${colors.light}`,
  }
  return (
    <>
      <H1>
        <Anchor
          to={slug}
          title={title}
          bland="true"
          style={style}
        >
          {title}
        </Anchor>
      </H1>
    </>
  )
}

function Post({ summary, limit, title, slug, tags, date, author, ttr, children }) {
  return (
    <>
      <Container>
        {postHeadingComponent(title, slug)}
        {summary ? 
          <>
            <Text
              limit={limit}
            >
              {children}
            </Text>
            <BottomMetadataContainer>
              {metadataComponent(date, author, ttr)}
              {tagsComponent(tags)}
            </BottomMetadataContainer>
          </> : 
          <>
            <TopMetadataContainer>
              {metadataComponent(date, author, ttr)}
              {tagsComponent(tags)}
            </TopMetadataContainer>
            <div>
              {children}
            </div>
          </>
        }
      </Container>
    </>
  )
}

export default Post