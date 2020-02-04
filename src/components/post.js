import React from 'react'
import styled from 'styled-components'
import { H1 } from './heading'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Anchor from './anchor'
import Text from './text'
import Constants from '../../gatsby-data'

const colors = Constants.theme.colors
const fonts = Constants.theme.fonts
const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
  position: relative;

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

const Wrap = styled.div`
  width: 100%;
  height: 188px;
  position: absolute;
  top: -8px;
  left: 8px;
  overflow: hidden;

  &:before, &:after {
    content: "";
    position: absolute;
  }
  &:before {
    width: 40px;
    height: 8px;
    right: 100px;
    border-radius: 8px 8px 0px 0px;
  }
  &:after {
    width: 8px;
    height: 40px;
    right: 0px;
    top: 100px;
    border-radius: 0px 8px 8px 0px;
  }
`

const Ribbon = styled.div`
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  right: -50px;
  z-index: 2;
  overflow: hidden;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border: 1px dashed;
  text-align: center;
  font-family: ${fonts.sans};
  font-size: 1rem;
  font-weight: bold;
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

function Post({ summary, limit, title, slug, tags, date, author, ttr, blurb, excerpt, number, children }) {
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
      <Container key={slug} className="post">
        {number ?
          <Wrap className="wrap">
            <Ribbon className="ribbon">
              #{number}
            </Ribbon>
           </Wrap>:
          <></>}
        {postHeadingComponent(title, slug)}
        {summary ? 
          <>
            <BlurbContainer>
              <Text
                limit={limit}
              >
                {blurb || excerpt}
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