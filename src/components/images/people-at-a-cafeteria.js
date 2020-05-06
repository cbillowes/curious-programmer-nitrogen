import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const PeopleAtACafeteria = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allImageSharp(
        filter: { fluid: { originalName: { eq: "people-at-a-cafeteria.jpg" } } }
      ) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.edges[0].node.fluid} />
}

export default PeopleAtACafeteria
