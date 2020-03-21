import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout'
import { H1 } from '../heading'
import Posts from '../posts'
import '../../styles/page.scss'

const ArchivesPage = ({ edges }) => (
  <Layout
    className="archives-page"
    footer={true}
  >
    <H1 className="heading">Archives of all the things</H1>
    <Posts
      edges={edges}
      truncate={20}
      showNumbers={true}
    />
  </Layout>
)

export default ArchivesPage

PropTypes.propTypes = {
  edges: PropTypes.array.isRequired,
}
