import { shallow } from "enzyme"

export function elementStartsWith(component, value) {
  const wrapper = shallow(component)
  const rendered = wrapper.html()
  return rendered.startsWith(value)
}

export function containsValue(component, value) {
  const wrapper = shallow(component)
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

export function componentTranslatesTo(component, element) {
    const wrapper = shallow(component)
    return wrapper.contains(element)
}