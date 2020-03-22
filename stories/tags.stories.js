import React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../src/components/tags'
import Page from './_helpers'

storiesOf('Components/tag', module)
  .add('listing', () =>
    <Page>
      <Tags
        tags={["hello", "world", "how", "are", "you"]}
      />
    </Page>
  )
