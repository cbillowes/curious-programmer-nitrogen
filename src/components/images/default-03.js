/*
 * AUTO-GENERATED.
 * Do not modify this file directly.
 * Put the image into the raw directory to regenerate.
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Default03 = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { in: ["default-03.jpg", "root/default-03.jpg"] }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (data && data.cover && data.cover.childImageSharp) {
    return <Img fluid={data.cover.childImageSharp.fluid} title={alt} alt={alt} />
  } else {
    return <></>
  }
}

export default Default03
