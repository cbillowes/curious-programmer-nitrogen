import React from 'react'
import { storiesOf } from '@storybook/react'
import { Bare, Linked, External, Disabled, Tag } from '../src/components/tag'
import '../src/components/layout.css'

storiesOf('Tags', module)
  .add('simple tag', () => <Tag title="hello world" />)
  .add('force tag to lowercase', () => <Tag title="HELLO galaxy" />)
  .add('with custom slug', () => <Tag title="custom slug" slug="/go/to/custom/url" />)
  .add('no link', () => <Tag title="hello universe" readonly={true} />)
  .add('disabled', () => <Tag title="hello multiverse" disabled={true} />)

storiesOf('Tag elements', module)
  .add('bare', () => <Bare>Hello World</Bare>)
  .add('linked', () => <Linked to="/blog" title="The home of the blog">Blog</Linked>)
  .add('external', () => <External to="https://google.com">Google</External>)
  .add('disabled', () => <Disabled>Hello World</Disabled>)
