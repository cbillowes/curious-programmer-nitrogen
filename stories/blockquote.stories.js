import React from 'react'
import { storiesOf } from '@storybook/react'
import Page from './_helpers'
import Anchor from '../src/components/anchor'

storiesOf('Typography/blockquote', module)
  .add('basic', () =>
    <Page>
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida massa ligula, non ullamcorper ex rutrum gravida.
      </blockquote>
    </Page>
  )
  .add('with anchor', () =>
    <Page>
      <blockquote>
        Lorem ipsum dolor sit amet, <Anchor to="/#">ullamcorper ex rutrum</Anchor> consectetur adipiscing elit. Nulla gravida massa ligula, non ullamcorper ex rutrum gravida.
      </blockquote>
    </Page>
  )
  .add('with a lot of text', () =>
    <Page>
      <blockquote>
        <p>
          A few words from the hitchiker's guide to the galaxy.
        </p>
        <p>
          I love deadlines. I like the <strong>whooshing</strong> sound they make as they fly by.
          In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.
        </p>
        Please accept just plain text my friend.
        <p>
          This must be Thursday,' said <strong>Arthur</strong> to himself, sinking low over his beer. 'I never could get the hang of Thursdays.
          I may not have gone where I intended to go, but I think I have ended up where I needed to be.
          Time is an illusion. Lunchtime doubly so.
        </p>
      </blockquote>
    </Page>
  )
  .add('inner blockquote', () =>
    <Page>
      <blockquote>
        Lorem ipsum dolor sit amet,
        <blockquote>ullamcorper ex rutrum</blockquote>
        consectetur adipiscing elit. Nulla gravida massa ligula, non ullamcorper ex rutrum gravida.
      </blockquote>
    </Page>
  )
