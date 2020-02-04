import React from 'react'
import { H1 } from './heading'
import PostMetadata from './postMetadata'
import Tags from './tags'
import Anchor from './anchor'
import Text from './text'
import './styles/post.scss'
import './styles/ribbon.scss'

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
      <div className="tags-container">
        <Tags
          tags={tags}
        />
      </div>
    </>
  )
}

function postHeadingComponent(title, slug) {
  return (
    <>
      <H1>
        <Anchor
          to={slug}
          title={title}
          bland="true"
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
    <article
      className="post-container html"
      dangerouslySetInnerHTML={{__html: children}}
    /> :
    <article>
      {children}
    </article>
  return (
    <>
      <section key={slug} className="post-container wrapped">
        {number ?
         <>
          <div className="ribbon">
            <div className="backdrop">
              <div className="text">
                #{number} 
               </div>
            </div>
          </div>
         </>:
          <></>}
        {postHeadingComponent(title, slug)}
        {summary ? 
          <>
            <div className="blurb-container">
              <Text
                limit={limit}
              >
                {blurb || excerpt}
              </Text>
            </div>
            <div className="metadata-container bottom">
              {metadataComponent(date, author, ttr)}
              {tagsComponent(tags)}
            </div>
          </> : 
          <>
            <div className="metadata-container top">
              {metadataComponent(date, author, ttr)}
              {tagsComponent(tags)}
            </div>
            {article}
          </>
        }
      </section>
    </>
  )
}

export default Post