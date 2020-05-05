import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageCoupleKissingInTheDark = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "couple-kissing-in-the-dark.jpg" }) {
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
export default ImageCoupleKissingInTheDark
