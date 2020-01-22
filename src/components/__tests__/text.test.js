import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Text from '../text'

Enzyme.configure({ adapter: new Adapter() })

function sutHtml(props) {
  return (
    <Text 
      limit={props.limit}
    >
      <p>Hello World.</p>
      <p>Hello Galaxy.</p>
      <p>Hello <strong>STRONG</strong> something.</p>
    </Text>
  )
}

function sutPlainText(props) {
  return (
    <Text
      limit={props.limit}
    >
      “In my experience there is no such thing as luck.” – Obi-Wan Kenobi.
    </Text>
  )
}

describe('Blurb', () => {

  it('should render all text from HTML elements', () => {
    const contains = containsElement(
      sutHtml({}),
      <span>
        Hello World. Hello Galaxy. Hello STRONG something.
      </span>
    )
    expect(contains).toBe(true)
  })

  it('should render truncated text from HTML elements', () => {
    const contains = containsElement(
      sutHtml({
        limit: 10,
      }),
      <span>
        Hello World. Hello Galaxy. Hello STRONG something.
      </span>
    )
    expect(contains).toBe(true)
  })

  it('should render all text from plain text', () => {
    const contains = containsElement(
      sutPlainText({}),
      <span>
        “In my experience there is no such thing as luck.” – Obi-Wan Kenobi.
      </span>
    )
    expect(contains).toBe(true)
  })

  it('should render truncated text from plain text', () => {
    const contains = containsElement(
      sutPlainText({
        limit: 10,
      }),
      <span>
        “In my experience there is no such thing as luck.”...
      </span>
    )
    expect(contains).toBe(true)
  })

})
