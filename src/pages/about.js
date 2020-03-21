import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import AboutPage from '../components/pages/about'
import '../styles/about.scss'
import '../styles/page.scss'

export default () => {
  const profileImage = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: {relativePath: {eq: "profile.jpg"}}) {
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
   `
  )
  return (
    <>
      <SEO
        title="About"
        crawl={true}
      >
        My name is Clarice Bouwer.
        I am curious and am always learning new things.
        I am a Senior Software Engineer generalist.
      </SEO>
      <AboutPage
        profileImage={profileImage}
      />
    </>
  )
}
