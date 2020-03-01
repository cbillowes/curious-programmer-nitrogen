
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

 // eslint-disable-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn()
}

class ValidationException {
  constructor(type, message) {
    this.type = type
    this.message = message
  }
}

function rendered(element) {
  const wrapper = shallow(element)
  const rendered = wrapper.html()
  return rendered
}

export function snapshot(component) {
  return renderer.create(component).toJSON()
}

export function getMountedComponent(component) {
  return mount(component).children()
}

export function mustContainValue(component, value) {
  const html = rendered(component)
  const matches = html.indexOf(value)
  if (matches > -1)
    return true
    throw new ValidationException(
      `ElementDoesNotContainValue`,
      `The rendered element does not contain value.
       Expected value:
       ${value}

       Rendered component:
       ${html}`
    )
}

export function mustNotContainValue(component, value) {
  const html = rendered(component)
  const matches = html.indexOf(value)
  if (matches === -1)
    return true
    throw new ValidationException(
      `ElementMustNotContainValue`,
      `The rendered element contains a value it should not contain.
       Offending value:
       ${value}

       Rendered component:
       ${html}`
    )
}

export function getHtmlComponent(element) {
  return shallow(element).html()
}

export function containsElement(parent, child) {
  const renderedParent = rendered(parent)
  const renderedChild = rendered(child)
  if (renderedParent.indexOf(renderedChild) > -1)
    return true
    throw new ValidationException(
      `containsElement`,
      `Actual element does not contain the expected element.
       Expected element:
       ${renderedChild}

       Actual rendered component:
       ${renderedParent}`
    )
}

export function validateValues(element, expected) {
  const matches = expected.map(e => {
    if (e.contains) {
      return mustContainValue(element, e.value)
    } else {
      return mustNotContainValue(element, e.value)
    }
  })
  return matches.indexOf(false) === -1
}
