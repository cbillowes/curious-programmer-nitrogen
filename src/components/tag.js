import React from 'react'
import styled from 'styled-components'
import { InternalLink, TagExternalLink } from './link'
import data from '../../gatsby-data.js'

const fonts = data.theme.fonts
const colors = data.theme.colors
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

const AnchorElement = styled(InternalLink)`
  cursor: pointer;
  text-decoration: none;
  ${transition};

  :hover span {
    cursor: pointer;
    background-color: ${colors.accentSecond};
    ${transition};
    color: ${colors.light};
  }
`

const TagElement = styled.span`
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
  cursor: default;
`

const DisabledElement = styled(TagElement)`
  color: ${colors.dark};
  background-color: ${colors.light};
  cursor: default;
`

const Bare = ({ children }) => {
  return (
    <TagElement
      data-container="bare-tag"
    >
     {children}
    </TagElement>
  )
}

const Linked = ({ to, title, children }) => {
  return (
    <AnchorElement 
      to={to}
      title={title}
      data-container="linked-tag"
    >
      <Bare>
        {children}
      </Bare>
    </AnchorElement>
  )
}

const External = ({ to, title, children }) => {
  return (
    <TagExternalLink 
      to={to}
      title={title}
      data-container="external-tag"
    >
      {children}
    </TagExternalLink>
  )
}

const Disabled = ({ children }) => {
  return (
    <DisabledElement 
      data-disabled="true"
      data-container="disabled-tag"
    >
      {children}
    </DisabledElement>
  )
}

function Tag ({ title, slug, disabled, readonly }) {
  if (!title) throw(`title for the tag is required`)
  if (!slug) slug = `/tag/${title.toLowerCase().replace(/ /g, "-")}`

  const external = (slug.startsWith(`http`))
  const lowerTitle = title.toLowerCase()

  if (readonly)
    return (
      <Bare>
        {lowerTitle}
      </Bare>
    )

  if (disabled)
    return (
      <Disabled>
        {lowerTitle}
      </Disabled>
    )

  if (external)
    return (
      <External
        to={slug}
        title={title}
      >
        {title}
      </External>
    )

  return (
    <Linked 
      to={slug}
      title={title}
    >
      {lowerTitle}
    </Linked>
  )
}

export { Bare, Linked, External, Disabled, Tag }