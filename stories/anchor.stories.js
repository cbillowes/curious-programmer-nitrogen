import React from 'react'
import { storiesOf } from '@storybook/react'
import Anchor from '../src/components/anchor'

storiesOf('Link', module)
  .add('styled external', () =>
    <Anchor
      to="https://google.com"
      title="Google"
    >
      Styled external
    </Anchor>
  )
  .add('default external', () =>
    <Anchor
      to="https://google.com"
      title="Google"
      defaultStyle="true"
    >
      Default external link
    </Anchor>
  )
  .add('styled internal', () =>
    <Anchor
      to="/blog"
      title="Blog page"
    >
      Styled internal link
    </Anchor>
  )
  .add('default internal', () =>
    <Anchor
      to="/blog"
      title="Blog page"
      defaultStyle="true"
    >
      Default internal link
    </Anchor>
  )
  .add('styled visited', () =>
    <Anchor
      to="http://localhost:6006/?path=/story/link--visited"
      title="Stories"
    >
      Styled visited link
    </Anchor>
  )
  .add('default visited', () =>
    <Anchor
      to="http://localhost:6006/?path=/story/link--visited"
      title="Stories"
      defaultStyle="true"
    >
      Default visited link
    </Anchor>
  )