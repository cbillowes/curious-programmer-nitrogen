import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import data from '../../gatsby-data.js'

const colors = data.theme.colors
const fonts = data.theme.fonts
const transitions = data.theme.transitions
const rel = "nofollow noopener noreferrer"

const transition = `
  -webkit-transition: all ${transitions.transition};
  transition: all  ${transitions.transition};
  transition-property: ${transitions.property};
  transition-duration: ${transitions.duration};
  transition-timing-function: ${transitions.timing};
  transition-delay: ${transitions.delay};
  text-decoration: none;
`

const LinkElement = styled(Link)`
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

const TagAnchorElement = styled.a`
  font-weight: 400;
  font-family: ${fonts.button};
  text-shadow: none;
  line-height: 1.75em;
  color: ${colors.darkest};
  background-color: ${colors.accentFirst};
  padding: 0 .5em;
  border-radius: 4px;
  margin: .25em;
  text-decoration: none;
  display: inline-block;
  ${transition}

  :hover {
    background-color: ${colors.accentSecond};
    color: ${colors.lightest};
    border-bottom: ${colors.accentSecond};
  }
`

const AnchorElement = styled.a`
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

const InternalLink = ({ to, title, children }) => {
  return (
    <LinkElement
      to={to}
      title={title}
    >
      {children}
    </LinkElement>
  )
}

const TagExternalLink = ({ to, title, children }) => {
  return (
    <>
      { " " }
      <TagAnchorElement
        href={to}
        rel={rel}
        title={title}
        target="_blank"
      >
        {children}
      </TagAnchorElement>
    </>
  )
}

const PrettyExternalLink = ({ to, title, children }) => {
  return (
    <>
      { " " }
      <AnchorElement
        href={to}
        rel={rel}
        title={title}
        target="_blank"
      >
        {children}
      </AnchorElement>
      { " " }
    </>
  )
}

const BlandExternalLink = ({ to, title, children }) => {
  return (
    <>
      { " " }
      <a 
        href={to}
        rel={rel}
        title={title}
        target="_blank"
      >
        {children}
      </a>
      { " " }
    </>
  )
}

export { InternalLink, TagExternalLink, BlandExternalLink, PrettyExternalLink }
