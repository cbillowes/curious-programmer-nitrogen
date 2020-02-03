import React from 'react'
import styled from 'styled-components'
import Anchor from './anchor'
import data from '../../gatsby-data.js'

const fonts = data.theme.fonts
const colors = data.theme.colors

const TagElement = styled.span`
  font-family: ${fonts.sans};
  text-shadow: none;
  line-height: 1.75em;
  color: ${colors.darkest};
  background-color: ${colors.accentFirst};
  padding: 0 .5em;
  border-radius: 4px;
  margin: .25em;
  text-decoration: none;
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
      data-container="bare-tag-element"
    >
     {children}
    </TagElement>
  )
}

const Disabled = ({ children }) => {
  return (
    <DisabledElement 
      data-disabled="true"
      data-container="disabled-tag-element"
    >
      {children}
    </DisabledElement>
  )
}

function Tag ({ title, to, disabled, readonly }) {
  if (!title) throw new Error(`title for the tag is required`)
  if (!to) to = `/tag/${title.toLowerCase().replace(/ /g, "-")}`

  const lowerTitle = title.toLowerCase()

  if (readonly)
    return (
      <Bare className="tag bare">
        {lowerTitle}
      </Bare>
    )

  if (disabled)
    return (
      <Disabled className="tag disabled">
        {lowerTitle}
      </Disabled>
    )

  return (
    <Anchor 
      to={to}
      title={title}
      tag="true"
      className="tag anchor"
    >
      {lowerTitle}
    </Anchor>
  )
}

export default Tag
