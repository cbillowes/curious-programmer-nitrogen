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
    <>
    { " " }
      <LinkElement
        to={to}
        title={title}
        data-component="link-element"
      >
        {children}
      </LinkElement>
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
        data-component="bland-external-link-element"
      >
        {children}
      </a>
      { " " }
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
        data-component="pretty-external-link-element"
      >
        {children}
      </AnchorElement>
      { " " }
    </>
  )
}

const TagLink = ({ to, title, children }) => {
  return (
    <>
      { " " }
      <TagAnchorElement
        href={to}
        rel={rel}
        title={title}
        target="_blank"
        data-component="tag-link-element"
      >
        {children}
      </TagAnchorElement>
    </>
  )
}

function Anchor ({ to, title, bland, tag, children }) {
  if (!to) throw(`url for the anchor is required`)
  
  const external = (to.startsWith(`http`))

  if (tag)
    return (
      <TagLink
        to={to}
        title={title}
      >
        {children}
      </TagLink>
    )

  if (external && bland)
    return (
      <BlandExternalLink
        to={to}
        title={title}
      >
        {children}
      </BlandExternalLink>
    )

  if (external)
    return (
      <PrettyExternalLink
        to={to}
        title={title}
      >
        {children}
      </PrettyExternalLink>
    )

  return (
    <InternalLink
      to={to}
      title={title}
    >
      {children}
    </InternalLink>
  )
}

export default Anchor
