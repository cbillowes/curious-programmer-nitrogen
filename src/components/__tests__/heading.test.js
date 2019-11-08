import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import H1 from '../h1'
import H2 from '../h2'
import H3 from '../h3'
import H4 from '../h4'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading', () => {

  it('should render level one', () => {
    const wrapper = shallow(
        <H1 title="This is a h1" />
    )

    expect(wrapper.contains(<h1>This is a h1</h1>)).toBe(true)
  })

  it('should render level two', () => {
    const wrapper = shallow(
        <H2 title="This is a h2" />
    )

    expect(wrapper.contains(<h2>This is a h2</h2>)).toBe(true)
  })

  it('should render level three', () => {
    const wrapper = shallow(
        <H3 title="This is a h3" />
    )

    expect(wrapper.contains(<h3>This is a h3</h3>)).toBe(true)
  })

  it('should render level four', () => {
    const wrapper = shallow(
        <H4 title="This is a h4" />
    )

    expect(wrapper.contains(<h4>This is a h4</h4>)).toBe(true)
  })

})
