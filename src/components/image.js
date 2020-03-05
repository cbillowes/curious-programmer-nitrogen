import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function getFile(files, src) {
  return files.images.edges.find(image =>
    image.node.relativePath === src
  )
}

function getFluidImage(file) {
  return file.node.childImageSharp.fluid
}

export function PureImage({ data, src }) {
  const file = getFile(data, src)
  if (!file) return <></>

  const fluidImage = getFluidImage(file)
  return (
    <Img fluid={fluidImage} />
  )
}

export const Image = props => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/"}}) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 1980) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <PureImage
      {...props}
      data={data}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image

//TODO: unrelated to this component I guess but markdown images are complaining about childImageSharp
/*
warn You can't use childImageSharp together with bom.gif — use publicURL instead. The childImageSharp portion of the
query in this file will return null:
warn You can't use childImageSharp together with endianness.gif — use publicURL instead. The childImageSharp portion of
 the query in this file will return null:
*/