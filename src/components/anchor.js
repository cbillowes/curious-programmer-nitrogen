import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import data from '../../gatsby-data.js'

const colors = data.theme.colors
const fonts = data.theme.fonts
const transitions = data.theme.transitions

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
  font-family: ${fonts.sans};
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

const TagLinkElement = styled(Link)`
  font-family: ${fonts.sans};
  text-shadow: none;
  line-height: 1.75rem;
  color: ${colors.darkest};
  background-color: ${colors.accentFirst};
  padding: .37rem .75rem;
  border-radius: .25rem;
  margin: .25rem;
  text-decoration: none;
  font-size: 80%;
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

const BlandInternalLink = ({ to, title, style, children }) => {
  return (
    <>
      { " " }
      <Link
        to={to}
        title={title}
        style={style}
        data-component="bland-link-element"
      >
        {children}
      </Link>
      { " " }
    </>
  )
}

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
        rel="nofollow noopener noreferrer"
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
        rel="nofollow noopener noreferrer"
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

const TagExternalLink = ({ to, title, children }) => {
  return (
    <>
      { " " }
      <TagAnchorElement
        href={to}
        rel="nofollow noopener noreferrer"
        title={title}
        target="_blank"
        data-component="tag-external-link-element"
      >
        {children}
      </TagAnchorElement>
    </>
  )
}

const TagInternalLink = ({ to, title, children }) => {
  return (
    <>
      { " " }
      <TagLinkElement
        to={to}
        title={title}
        data-component="tag-internal-link-element"
      >
        {children}
      </TagLinkElement>
      { " " }
    </>
  )
}

function Anchor ({ to, title, bland, tag, style, children }) {
  if (!to) throw new Error(`url for the anchor is required`)
  
  const external = to.startsWith(`http`) || to.startsWith(`mailto:`)

  if (tag && external)
    return (
      <TagExternalLink
        to={to}
        title={title}
      >
        {children}
      </TagExternalLink>
    )

  if (tag)
    return (
      <TagInternalLink
        to={to}
        title={title}
      >
        {children}
      </TagInternalLink>
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

  if (bland)
      return (
        <BlandInternalLink
          to={to}
          title={title}
          style={style}
        >
          {children}
        </BlandInternalLink>
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
