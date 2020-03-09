import React from 'react'
import Layout from '../src/components/layout'
import { WithHeadingSpacer } from '../src/components/spacer'

const Page = ({ className, children }) => {
  return (
    <Layout
      className={className}
    >
      <WithHeadingSpacer />
      {children}
    </Layout>
  )
}

export default Page