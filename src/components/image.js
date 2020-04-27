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

//TODO: unrelated to this component I guess but markdown images are complaining about childImageSharp
/*
warn You can't use childImageSharp together with bom.gif — use publicURL instead. The childImageSharp portion of the
query in this file will return null:
warn You can't use childImageSharp together with endianness.gif — use publicURL instead. The childImageSharp portion of
 the query in this file will return null:
*/
