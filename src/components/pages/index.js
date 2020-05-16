import React from "react"
import Layout from "../layout"
import Posts from "../posts"
import "../../styles/page.scss"

const IndexPage = ({ edges }) => (
  <Layout className="blog-page" footer={true}>
    <Posts edges={edges} wordLimit={50} />
  </Layout>
)

export default IndexPage
