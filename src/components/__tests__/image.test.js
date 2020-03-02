import React from 'react'
import { PureImage as Image } from '../image'
import { getSnapshot, mustContainValue, mustNotContainValue } from './_helpers'

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
  it(`should render an image that exists`, () => {
    const image = (
      <Image
        data={data}
        src="favicon.png"
      />
    )
    const tree = getSnapshot(image)
    expect(tree).toMatchSnapshot()
  })

  it(`should not render an image that does not exist`, () => {
    const image = (
      <Image
        data={data}
        src="i-do-not-exist.png"
      />
    )
    const tree = getSnapshot(image)
    expect(tree).toMatchSnapshot()
  })
})
