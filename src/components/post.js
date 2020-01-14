import React from 'react'
import styled from 'styled-components'
import { H1 } from './heading'
import PostMetadata from './postMetadata'
import Tag from './tag'
import Anchor from './anchor'
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
  if (!tags) return <></> 

  const renderable = tags.split(`,`)
  return (
    <>
      <TagsContainer className="tags">
        <div data-component="post-tags">
          {renderable.map(tag => {
            return (
              <Tag
                key={tag}
                title={tag}
              />
            )
          })}
        </div>
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

function Post({ summary, title, slug, tags, date, author, ttr, children }) {
  return (
    <>
      <Container>
        {postHeadingComponent(title, slug)}
        {summary ? 
          <></> : 
          <TopMetadataContainer>
            {metadataComponent(date, author, ttr)}
            {tagsComponent(tags)}
          </TopMetadataContainer>
        }
        <div>
          {children}
        </div>
        {summary ? 
          <BottomMetadataContainer>
            {metadataComponent(date, author, ttr)}
            {tagsComponent(tags)}
          </BottomMetadataContainer> :
          <></>
        }
      </Container>
    </>
  )
  // const renderableTags = (tags || "").split(",")
  // const metadata =
  // <>
  //   <PostMetadata
  //     date={date}
  //     author={author}
  //     ttr={ttr}
  //   /> 
  //   <TagsContainer>
  //     {renderableTags.map(tag => {
  //       return (
  //         <Tag 
  //           key={tag} 
  //           title={tag} 
  //         />
  //       )
  //     })}
  //   </TagsContainer>
  // </>

  // return (
  //   <Container>
  //     <H1>
  //       <Anchor
  //         to={slug}
  //         title={title}
  //         bland={true}
  //         style={{
  //           color: colors.light,
  //           textDecoration: `none`,
  //           borderBottom: `solid 1px ${colors.light}`,
  //         }}
  //       >
  //         {title}
  //       </Anchor>
  //     </H1>
  //     <MetadataContainer>
  //       {summary ? <></> : metadata}
  //     </MetadataContainer>
  //     <div>
  //       {children}
  //     </div>
  //     {summary ? metadata : <></>}
  //   </Container>
  // )
}

export default Post