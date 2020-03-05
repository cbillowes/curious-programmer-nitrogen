import React from 'react'
import { storiesOf } from '@storybook/react'
import Page from './_helpers'

storiesOf('Blockquote', module)
  .add('integrated', () =>
    <Page className="page">
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida massa ligula, non ullamcorper ex rutrum gravida.
      </blockquote>
    </Page>
  )