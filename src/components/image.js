import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function render(file) {
  return <Img fluid={file.node.childImageSharp.fluid} />
}

function getImage(files, src) {
  return files.images.edges.find(image => image.node.relativePath === src)
}

const Image = ({ src }) => {
  const images = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/"}}) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 1980) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const image = getImage(images, src)
  return render(image)
}

export default Image
