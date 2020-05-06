import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Kibana = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allImageSharp(
        filter: { fluid: { originalName: { eq: "kibana.jpg" } } }
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

export default Kibana
