import { shallow } from 'enzyme'

class ValidationException {
  constructor(type, message) {
    this.type = type
    this.message = message
  }
}

function renderedComponent(component) {
  const wrapper = shallow(component)
  const rendered = wrapper.html()
  return rendered
}

export function elementStartsWith(element, value) {
  const rendered = renderedComponent(element)
  if (rendered.startsWith(value))
    return true
    throw new ValidationException(
      `ElementStartsWith`, 
      `Rendered element tag does not start with: ${value}`)
}

export function containsValue(element, value) {
  const rendered = renderedComponent(element)
  const contains = rendered.indexOf(value)
  if (contains > -1)
    return true
    throw new ValidationException(
      `ElementDoesNotContainValue`,
      `Rendered element tag does not contain value: ${value}\n\nRendered tag: ${rendered}`
    )
}

export function doesNotContainValue(element, value) {
   try {
     containsValue(element, value)
     throw new ValidationException(
       `ElementContainsValue`,
       `Rendered element tag contains value: ${value}\n\nRendered tag: ${renderedComponent(element)}`
     )
   } catch(e) {
     if (e.type === `ElementContainsValue`)
       throw e
     return true
   }
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
    throw `Rendered parent elemenet does not contain child element\n\nParent: ${renderedParent}\nChild:  ${renderedChild}`
}

export function componentTranslatesTo(component, element) {
  const wrapper = shallow(component)
  return wrapper.contains(element)
}

export function getState(component) {
  const wrapper = shallow(component)
  const state = wrapper.state()
  return state
}
