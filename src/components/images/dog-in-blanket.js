/*
 * AUTO-GENERATED.
 * Do not modify this file directly.
 * Put the image into the raw directory to regenerate.
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const DogInBlanket = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "root/dog-in-blanket.jpg" }) {
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

export default DogInBlanket
