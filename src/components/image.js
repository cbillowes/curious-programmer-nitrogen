import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export const Image = ({ data }) => {
  const edges = data.images ? data.images.edges : []
  if (edges.length === 0) return <></>

  const fluidImage = edges[0].node.childImageSharp.fluid
  if (!fluidImage) return <></>

  return <Img fluid={fluidImage} />
}

Image.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Image
