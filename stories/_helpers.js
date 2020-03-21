import React from 'react'
import Layout from '../src/components/layout'

const Page = ({ className, children }) => {
  return (
    <Layout
      className={className}
    >
      {children}
    </Layout>
  )
}

export default Page
