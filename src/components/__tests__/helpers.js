import { shallow } from 'enzyme'

export function containsValue(element, value) {
    const wrapper = shallow(element)
    const rendered = wrapper.html()
    const contains = rendered.indexOf(value)
    return contains > -1
}