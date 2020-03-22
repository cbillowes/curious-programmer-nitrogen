import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../src/components/footer'
import Page from './_helpers'

storiesOf('Components', module)
  .add('footer', () =>
    <Page>
      <Footer />
    </Page>
  )
