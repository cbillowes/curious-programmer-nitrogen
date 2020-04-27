import React from "react"
import Image from "../image"
import { getSnapshot } from "./_helpers"

const data = {
  images: {
    edges: [
      {
        node: {
          extension: "png",
          relativePath: "favicon.png",
          childImageSharp: {
            fluid: {
              sizes: "(max-width: 64px) 100vw, 64px",
              src: "/static/902e86a7b3f31818f9cd33b4adb71503/fc3a2/favicon.png",
              srcSet:
                "/static/902e86a7b3f31818f9cd33b4adb71503/fc3a2/favicon.png 64w",
              aspectRatio: 1,
            },
          },
        },
      },
    ],
  },
}

describe(`Image`, () => {
  it(`should render an image that exists`, () => {
    const component = <Image data={data} />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should not render an image that does not exist`, () => {
    const component = <Image data={{}} />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
