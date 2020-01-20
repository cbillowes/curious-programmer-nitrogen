import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement, validateValues } from './helpers'
import Tag from '../tag'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Tag 
      title={props.tag} 
      to={props.to}
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
    const validation = validateValues(
      sut({
        tag: `hello world`,
      }),
      [
        {contains: true, value: `>hello world<`},
        {contains: true, value: `"/tag/hello-world"`},
        {contains: true, value: `data-component="tag-internal-link-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should direct to external link', () => {
    const validation = validateValues(
      sut({
        tag: `google`,
        to: `https://www.google.com`
      }),
      [
        {contains: true, value: `>google<`},
        {contains: true, value: `"https://www.google.com"`},
        {contains: true, value: `data-component="tag-external-link-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should direct to internal link', () => {
    const contains = containsElement(
      sut({
        to: `/tags/hello-world`,
        tag: `hello world`,
      }),
      <Tag
        to="/tags/hello-world"
        title="hello world"
      />
    )
    expect(contains).toBe(true)
  })

  it('should display internal tag title in lower case', () => {
    const contains = containsElement(
      sut({
        tag: `HELLO WORLD`,
      }),
      <Tag
        to="/tag/hello-world"
        title="HELLO WORLD"
      />
    )
    expect(contains).toBe(true)
  })

  it('should display external tag title as provided', () => {
    const contains = containsElement(
      sut({
        tag: `GoGgLe`,
        to: `https://www.google.com`,
      }),
      <Tag
        title="GoGgLe"
        to="https://www.google.com"
      />
    )
    expect(contains).toBe(true) 
  })

  it('should render readonly tag', () => {
    const contains = containsElement(
      sut({
        tag: `Technical`,
        readonly: true,
      }),
      <Tag
        title="Technical"
        readonly="true"
      />
    )
    expect(contains).toBe(true) 
  })

  it('should render disabled tag', () => {
    const contains = containsElement(
      sut({
        tag: `Relationships`,
        disabled: true,
      }),
      <Tag
        title="relationships"
        disabled="true"
      />
    )
    expect(contains).toBe(true) 
  })

})
