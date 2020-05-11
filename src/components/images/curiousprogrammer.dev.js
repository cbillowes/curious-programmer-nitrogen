import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CuriousprogrammerDev = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allImageSharp(
        filter: { fluid: { originalName: { eq: "curiousprogrammer.dev.png" } } }
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

export default CuriousprogrammerDev
