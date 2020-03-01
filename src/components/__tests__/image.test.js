import React from 'react'
import { PureImage as Image } from '../image'
import { snapshot, mustContainValue, mustNotContainValue } from './_helpers'

const data = {
  "images": {
    "edges": [
      {
        "node": {
          "extension": "png",
          "relativePath": "favicon.png",
          "childImageSharp": {
            "fluid": {
              "sizes": "(max-width: 64px) 100vw, 64px",
              "src": "/static/902e86a7b3f31818f9cd33b4adb71503/fc3a2/favicon.png",
              "srcSet": "/static/902e86a7b3f31818f9cd33b4adb71503/fc3a2/favicon.png 64w",
              "aspectRatio": 1
            }
          }
        }
      },
      {
        "node": {
          "extension": "png",
          "relativePath": "gatsby-astronaut.png",
          "childImageSharp": {
            "fluid": {
              "sizes": "(max-width: 800px) 100vw, 800px",
              "src": "/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png",
              "srcSet": "/static/6d91c86c0fde632ba4cd01062fd9ccfa/59beb/gatsby-astronaut.png 200w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c0bbd/gatsby-astronaut.png 400w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w",
              "aspectRatio": 1
            }
          }
        }
      },
    ]
  }
}

function ImageUnderTest(props) {
  return (
    <Image
      data={data}
      src={props.src}
    />
  )
}

describe(`Image`, () => {

  it(`should render correctly`, () => {
    const tree = snapshot(
      <ImageUnderTest
        src="favicon.png"
      />
    )

    expect(tree).toMatchSnapshot()
  })

  it(`should render the image when it exists`, () => {
    const match = mustContainValue(
      <ImageUnderTest
        src="favicon.png"
      />,
      data.images.edges[0].node.childImageSharp.fluid.src
    )
    expect(match).toBe(true)
  })

  it(`should not render when there is no image`, () => {
    const match = mustNotContainValue(
      <ImageUnderTest
        src="no-such-image.png"
      />,
      `picture`
    )
    expect(match).toBe(true)
  })

})