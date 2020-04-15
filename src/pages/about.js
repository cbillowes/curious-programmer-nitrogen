import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import AboutPage from '../components/pages/about'
import '../styles/about.scss'
import '../styles/page.scss'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            lang
            title
          }
        }
        images: allFile(filter: {relativePath: {eq: "profile.jpg"}}) {
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
  const site = data.site.siteMetadata
  return (
    <>
      <SEO
        title={`About | ${site.title}`}
        crawl={true}
        lang={site.lang}
        author={site.author}
      >
        My name is Clarice Bouwer.
        I am curious and am always learning new things.
        I am a Senior Software Engineer generalist.
      </SEO>
      <AboutPage
        profileImage={data}
      />
    </>
  )
}
