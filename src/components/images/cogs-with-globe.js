/*
 * AUTO-GENERATED.
 * Do not modify this file directly.
 * Put the image into the raw directory to regenerate.
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CogsWithGlobe = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "root/cogs-with-globe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (data && data.cover && data.cover.childImageSharp) {
    return <Img fluid={data.cover.childImageSharp.fluid} />
  } else {
    return <></>
  }
}

export default CogsWithGlobe
