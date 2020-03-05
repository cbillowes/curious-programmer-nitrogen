import React from 'react'
import { storiesOf } from '@storybook/react'
import License from '../src/components/license'
import Page from './_helpers'

storiesOf('License', module)
  .add('standalone', () =>
    <License />
  )
  .add('integrated', () =>
    <Page className="page">
      <License />
    </Page>
  )