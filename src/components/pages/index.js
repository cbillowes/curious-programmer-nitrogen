import React from "react"
import Layout from "../layout"
import Posts from "../posts"
import ShowMore from "../showMore"
import "../../styles/page.scss"

const IndexPage = ({ edges }) => (
  <Layout className="blog-page" footer={true}>
    <Posts edges={edges} wordLimit={50} />
    <ShowMore to="/archives" title="Show more articles" />
  </Layout>
)

export default IndexPage
