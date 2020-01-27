import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from '../src/components/layout'
import Footer from '../src/components/footer'
import '../src/components/layout.css'

storiesOf('Footer', module)
  .add('plain', () => 
    <Footer />
  )
  .add('layout', () =>
    <Layout>
    </Layout>
  )
