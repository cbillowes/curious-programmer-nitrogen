import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout'
import Posts from '../posts'
import { H1 } from '../heading'
import '../../styles/page.scss'

const TagPage = ({ tag, edges }) => {
  return (
    <Layout
      className="tag-page"
      footer={true}
    >
      <Posts
        edges={edges}
        showNumbers={true}
      />
    </Layout>
  )
}

export default TagPage

PropTypes.propTypes = {
  edges: PropTypes.array.isRequired,
}
