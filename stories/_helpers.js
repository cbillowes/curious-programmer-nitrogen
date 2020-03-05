import React from 'react'
import Layout from '../src/components/layout'
import { SmallSpacer } from '../src/components/spacer'

const Page = ({ className, children }) => {
  return (
    <Layout
      className={className}
    >
      <SmallSpacer />
      {children}
    </Layout>
  )
}

export default Page