import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from '../src/components/layout'
import Footer from '../src/components/footer'

storiesOf('Footer', module)
  .add('plain', () =>
    <Footer />
  )
  .add('layout', () =>
    <Layout>
    </Layout>
  )
