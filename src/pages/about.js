import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import AboutPage from "../components/pages/about"
import "../styles/about.scss"
import "../styles/page.scss"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            image
          }
        }
        images: allFile(filter: { relativePath: { eq: "profile.jpg" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  const siteMetadata = data.site.siteMetadata
  return (
    <>
      <SEO title="About" crawl={true} siteMetadata={siteMetadata}>
        My name is Clarice Bouwer. I am a Senior Software Engineer. I am curious
        and am always learning new things. My passion is Clojure, Gatsby and
        React.
      </SEO>
      <AboutPage profileImage={data} />
    </>
  )
}
