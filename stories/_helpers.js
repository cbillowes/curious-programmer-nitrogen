import React from "react"
import Layout from "../src/components/layout"

const Page = ({ children }) => {
  return (
    <Layout className="page">
      <br />
      <br />
      {children}
    </Layout>
  )
}

export default Page
