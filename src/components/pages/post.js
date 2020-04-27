import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout'
import Post from '../post'
import PostNavigationTiny from '../postNavigationTiny'
import PostNavigationTeaser from '../postNavigationTeaser'
import Footer from '../footer'
import '../../styles/page.scss'

function postNavigation(node, author) {
  const { timeToRead, excerpt } = node
  const { title, tags } = node.frontmatter
  const { slug, date } = node.fields
  return {
    title,
    slug,
    author,
    date,
    tags,
    ttr: timeToRead,
    excerpt,
  }
}

const PostPage = ({ slug, title, date, tags, excerpt, author, timeToRead, html, next, previous, number }) => {
  const previousPost = postNavigation(previous, author)
  const nextPost = postNavigation(next, author)

  return (
    <>
      <Layout
        className="post-page"
        footer={false}
      >
        <PostNavigationTiny
          previous={previousPost}
          next={nextPost}
        />
        <Post
          slug={slug}
          title={title}
          date={date}
          tags={tags}
          ttr={timeToRead}
          excerpt={excerpt}
          author={author}
          number={number}
        >
          {html}
        </Post>
      </Layout>
      <PostNavigationTeaser
        previous={previousPost}
        next={nextPost}
      />
      <Footer />
    </>
  )
}

export default PostPage

PostPage.propType = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  excerpt: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  html: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  next: PropTypes.object.isRequired,
  previous: PropTypes.object.isRequired,
}
