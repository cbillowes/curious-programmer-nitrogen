import React from "react"
import PropTypes from "prop-types"
import Layout from "../layout"
import { H1 } from "../heading"
import Posts from "../posts"
import "../../styles/page.scss"

const TagPage = ({ tag, edges }) => {
  return (
    <Layout className="tag-page" footer={true}>
      <H1>{`{:tag "${tag}"}`}</H1>
      <Posts edges={edges} wordLimit={25} />
    </Layout>
  )
}

export default TagPage

PropTypes.propTypes = {
  edges: PropTypes.array.isRequired,
}
