import React from 'react'
import styled from 'styled-components'
import { H1 } from './heading'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Anchor from './anchor'
import Text from './text'
import Constants from '../../gatsby-data'

const colors = Constants.theme.colors
const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 0;

  h1 {
    text-align: center;
  }
`

const BlurbContainer = styled.div`
  font-size: 160%;
`

const TopMetadataContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 100%;
`

const BottomMetadataContainer = styled.div`
  text-align: right;
  font-size: 100%;
  color: ${colors.fence};

  .tags {
    text-align: center;
  }
`

const TagsContainer = styled.div`
  margin-top: .75rem;
`

const PostContainer = styled.article`
  font-size: 120%;

  a {
    color: ${colors.accentFirst};
  }
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
  const article = 
    typeof children === `string` ?
    <PostContainer
      className="html"
      dangerouslySetInnerHTML={{__html: children}}
    /> :
    <article>
      {children}
    </article>
  return (
    <>
      <Container key={slug}>
        {postHeadingComponent(title, slug)}
        {summary ? 
          <>
            <BlurbContainer>
              <Text
                limit={limit}
              >
                {children}
              </Text>
            </BlurbContainer>
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
            {article}
          </>
        }
      </Container>
    </>
  )
}

export default Post