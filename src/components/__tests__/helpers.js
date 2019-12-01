import { shallow } from "enzyme"

export function containsValue(element, value) {
  const wrapper = shallow(element)
  const rendered = wrapper.html()
  const contains = rendered.indexOf(value)
  return contains > -1
}

export function containsElement(parentElement, childElement) {
  const parentWrapper = shallow(parentElement)
  const childWrapper = shallow(childElement)
  const renderedParent = parentWrapper.html()
  const renderedChild = childWrapper.html()
  return renderedParent.indexOf(renderedChild) > -1
}