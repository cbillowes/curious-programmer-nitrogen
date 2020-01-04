import { shallow } from 'enzyme'

function renderedComponent(component) {
  const wrapper = shallow(component)
  const rendered = wrapper.html()
  return rendered
}

export function elementStartsWith(element, value) {
  const rendered = renderedComponent(element)
  if (rendered.startsWith(value))
    return true
    throw `Rendered element tag does not start with: ${value}`
}

export function containsValue(element, value) {
  const rendered = renderedComponent(element)
  const contains = rendered.indexOf(value)
  if (contains > -1)
    return true
    throw `Rendered element tag does not contain value: ${value}\nRendered tag: ${rendered}`
}

export function validateValues(element, expectedValues) {
  const contains = expectedValues.map(expected => {
    if (expected.contains) {
      const actual = containsValue(element, expected.value)
      return actual === true
    } else {
      return true
    }
  })
  return contains.indexOf(false) === -1
}

export function containsElement(parentElement, childElement) {
  const renderedParent = renderedComponent(parentElement) 
  const renderedChild = renderedComponent(childElement)
  if (renderedParent.indexOf(renderedChild) > -1)
    return true
    throw `Rendered parent elemenet does not contain child element\nParent: ${renderedParent}\nChild:${renderedChild}`
}

export function componentTranslatesTo(component, element) {
  const wrapper = shallow(component)
  return wrapper.contains(element)
}

export function getState(component, expectedState) {
  const wrapper = shallow(component)
  const state = wrapper.state()
  return state === expectedState
}
