import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
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

const AnchorElement = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  ${transition};

  :hover span {
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

const Bare = ({ title }) => {
  return (
    <TagElement>{title}</TagElement>
  )
}

const Linked = ({ title, slug }) => {
  return (
    <AnchorElement to={slug}>
      <Bare title={title} />
    </AnchorElement>
  )
}

const Disabled = ({ title }) => {
  return (
    <DisabledElement data-disabled="true">
      {title}
    </DisabledElement>
  )
}

function Tag ({ tag, slug, disabled, readonly }) {
  if (!tag) throw("tag is required")
  if (!slug) slug = `/tag/${tag.toLowerCase().replace(/ /g, "-")}`

  const title = tag.toLowerCase()

  if (readonly)
    return <Bare title={title} />

  if (disabled)
    return <Disabled title={title} />

  if (slug)
    return <Linked title={title} slug={slug} />

  return <></>
}

export default Tag
