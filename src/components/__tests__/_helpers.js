import { shallow, mount } from "enzyme"
import renderer from "react-test-renderer"

// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/unit-testing.md
// eslint-disable-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
}

export function mockFn() {
  return jest.fn()
}

export function getWrapper(component) {
  const wrapper = shallow(component)
  return wrapper
}

export function getElement(component) {
  const wrapper = getWrapper(component)
  const element = wrapper.html()
  return element
}

export function getSnapshot(component) {
  return renderer.create(component).toJSON()
}

export function getMount(component) {
  return mount(component)
}

export function getMountedComponent(component) {
  return getMount(component).children()
}

export function getListOfPostEdges() {
  return [
    {
      node: {
        excerpt: `Just pack your towel and you will be fine.`,
        timeToRead: 42,
        fields: {
          slug: `/dont-panic`,
          date: `2019-02-01T00:00:00.000Z`,
          number: 1,
        },
        frontmatter: {
          title: `Don't panic`,
          tags: [`don't`, `panic`],
          author: `Clarice Bouwer`,
        },
      },
    },
    {
      node: {
        excerpt: `Keep packing your towels and you will be fine.`,
        timeToRead: 42,
        fields: {
          slug: `/still-dont-panic`,
          date: `2019-02-01T00:00:00.000Z`,
          number: 2,
        },
        frontmatter: {
          title: `Still don't panic`,
          tags: [`still`, `don't`, `panic`],
          author: `Clarice Bouwer`,
        },
      },
    },
  ]
}

/*
mount/shallow does not rerender when props change or apply new props on update #1229
https://github.com/enzymejs/enzyme/issues/1229

How to mock Date with Jest
https://dev.to/maxpou/how-to-mock-date-with-jest-3k4b
*/
