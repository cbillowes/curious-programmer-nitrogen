import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement, validateValues } from './helpers'
import { Tag, Bare, Linked, External, Disabled } from '../tag'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Tag 
      title={props.tag} 
      slug={props.slug}
      disabled={props.disabled} 
      readonly={props.readonly}
    />
  )
}

describe('Tag', () => {

  it('needs a tag to render', () => {
    expect(() => shallow(<Tag />)).toThrow()
  })

  it('should generate the slug if one is not given', () => {
    const contains = containsElement(
      sut({
        tag: `hello world`,
      }),
      <Linked
        title="hello world"
        to="/tag/hello-world"
      >
        hello world
      </Linked>
    )
    expect(contains).toBe(true)
  })

  it('should direct to external link', () => {
    const contains = containsElement(
      sut({
        tag: `google`,
        slug: `https://www.google.com`,
      }),
      <External
        title="google"
        to="https://www.google.com"
      >
        google
      </External>
    )
    expect(contains).toBe(true) 
  })

  it('should direct to internal link', () => {
    const contains = containsElement(
      sut({
        slug: `/tags/hello-world`,
        tag: `hello world`,
      }),
      <Linked
        to="/tags/hello-world"
        title="hello world"
      >
        hello world
      </Linked>
    )
    expect(contains).toBe(true)
  })

  it('should display internal tag title in lower case', () => {
    const contains = containsElement(
      sut({
        tag: `HELLO WORLD`,
      }),
      <Linked
        to="/tag/hello-world"
        title="HELLO WORLD"
      >
        hello world
      </Linked>
    )
    expect(contains).toBe(true)
  })

  it('should display external tag title as provided', () => {
    const contains = containsElement(
      sut({
        tag: `GoGgLe`,
        slug: `https://www.google.com`,
      }),
      <External
        title="GoGgLe"
        to="https://www.google.com"
      >
        GoGgLe
      </External>
    )
    expect(contains).toBe(true) 
  })

  it('should render readonly tag', () => {
    const contains = containsElement(
      sut({
        tag: `Technical`,
        readonly: true,
      }),
      <Bare>
        technical
      </Bare>
    )
    expect(contains).toBe(true) 
  })

  it('should render disabled tag', () => {
    const contains = containsElement(
      sut({
        tag: `Relationships`,
        disabled: true,
      }),
      <Disabled>
        relationships
      </Disabled>
    )
    expect(contains).toBe(true) 
  })

})
