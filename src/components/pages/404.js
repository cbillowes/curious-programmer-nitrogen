import React from "react"
import PropTypes from "prop-types"
import Layout from "../layout"
import ReadingPane from "../readingPane"
import Anchor from "../anchor"
import Posts from "../posts"
import "../../styles/page.scss"

const PageNotFound = ({ edges }) => {
  return (
    <Layout className="not-found-page" footer={true}>
      <ReadingPane heading="Embarrassing much? O_o">
        <p>
          Something doesn&lsquo;t seem quite right. Whatever you clicked on
          cannot be found or no longer exists. I may have accidentally changed
          the route or deleted the file or you accessed a broken link.
        </p>
        <p>
          <Anchor to="/about" title="Contact me">
            Let me know
          </Anchor>
          if you are looking for something in particular or if something is
          consistently borked.
        </p>
        <p>If you are keen, check out my posts below.</p>
      </ReadingPane>
      <Posts edges={edges} />
    </Layout>
  )
}

export default PageNotFound

PropTypes.propTypes = {
  edges: PropTypes.array.isRequired,
}
