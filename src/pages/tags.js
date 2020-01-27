import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Tag from '../components/tag'
import Layout from '../components/layout'
import SEO from '../components/seo'
const _ = require('lodash')

class TagsPage extends Component {

  getTags = (edges) => {
    let data = edges
      .map((item) => item.node.frontmatter)
      .map((item) => item.tags)

    const tagCollection = data.map(item => (!item ? [] : item))
    let tags = []
    for (let i = 0; i < tagCollection.length; i++) {
      for (let j = 0; j < tagCollection[i].length; j++) {
        let tag = tagCollection[i][j]
        if (!_.includes(tags, tag)) tags.push(tag)
      }
    }
    return tags.sort()
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Tags"
          description="Discover articles that have been tagged over time."
        />
        <div data-page="tags">
          <h1>Tags</h1>
          {this.getTags(this.props.data.allMarkdownRemark.edges).map(tag => {
            return <Tag title={tag} />
          })}
        </div>
      </Layout>
    )
  }
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPage {
    allMarkdownRemark(limit: 1000) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`