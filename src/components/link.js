import React from 'react'
import styled from 'styled-components'
import data from '../../gatsby-data.js'

const colors = data.theme.colors
const rel = "nofollow noopener noreferrer"

const Link = styled.a`
  color: ${colors.accentFirst};
  text-decoration: none;
  padding: .05rem;
  border-bottom: solid 1px ${colors.accentFirst};

  :hover {
    background-color: ${colors.accentSecond};
    color: ${colors.lightest};
    border-bottom: ${colors.accentSecond};
  }
`

const StyledExternalLink = ({ to, children }) => {
  return (
    <>
      { " " }
      <Link
        href={to}
        rel={rel}
      >
        {children}
      </Link>
      { " " }
    </>
  )
}

const ExternalLink = ({ to, children }) => {
  return (
    <>
      { " " }
      <a 
        href={to}
        rel={rel}
      >
        {children}
      </a>
      { " " }
    </>
  )
}

export { ExternalLink, StyledExternalLink }
