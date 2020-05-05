import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageDefault06 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "default-06.jpg" }) {
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
export default ImageDefault06
