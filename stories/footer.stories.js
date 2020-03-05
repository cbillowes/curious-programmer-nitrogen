import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../src/components/footer'
import Page from './_helpers'

storiesOf('Footer', module)
  .add('standalone', () =>
    <Footer />
  )
  .add('integrated', () =>
    <Page className="page">
      <Footer />
    </Page>
  )