import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageDefault07 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "default-07.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default ImageDefault07
