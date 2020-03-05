import React from 'react'
import { storiesOf } from '@storybook/react'
import ShowMore from '../src/components/showMore'
import Page from './_helpers'

storiesOf('Show More', module)
  .add('integrated', () =>
    <Page className="page">
      <ShowMore
        to="/archives"
        title="Show more articles" />
    </Page>
  )