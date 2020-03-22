import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout'
import ReadingPane from '../readingPane'
import Tags, { getTagsFromEdges } from '../tags'
import '../../styles/page.scss'

const TagsPage = ({ edges }) => {
  const tags = getTagsFromEdges(edges)
  return (
    <Layout
      className="tags-page"
      footer={true}
    >
      <div>
        <ReadingPane
          heading="Tags"
        >
          <Tags
            tags={tags}
          />
        </ReadingPane>
      </div>
    </Layout>
  )
}

export default TagsPage

PropTypes.propTypes = {
  edges: PropTypes.array.isRequired,
}
