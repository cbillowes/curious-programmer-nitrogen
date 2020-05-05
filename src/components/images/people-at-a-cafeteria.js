import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImagePeopleAtACafeteria = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "people-at-a-cafeteria.jpg" }) {
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
export default ImagePeopleAtACafeteria
