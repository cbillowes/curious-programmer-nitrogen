import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, H3, H4 } from '../src/components/heading'
import Page from './_helpers'

storiesOf('Components/heading', module)
  .add('h1', () =>
    <Page>
      <H1>The quick brown fox jumps over the lazy dog</H1>
    </Page>
  )
  .add('h2', () =>
    <Page>
      <H2>The quick brown fox jumps over the lazy dog</H2>
    </Page>
  )
  .add('h3', () =>
    <Page>
      <H3>The quick brown fox jumps over the lazy dog</H3>
    </Page>
  )
  .add('h4', () =>
    <Page>
      <H4>The quick brown fox jumps over the lazy dog</H4>
    </Page>
  )
  .add('snippet', () =>
    <Page>
      <H1>The quick brown fox jumps over the lazy dog</H1>
      <H2>The quick brown fox jumps over the lazy dog</H2>
      <H3>The quick brown fox jumps over the lazy dog</H3>
      <H4>The quick brown fox jumps over the lazy dog</H4>
    </Page>
  )
