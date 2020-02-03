import React from 'react'
import styled from 'styled-components'
import Constants from '../../gatsby-data'

const Heading = styled.div`
  font-family: ${Constants.theme.fonts.sans};
  font-size: 130%;
  line-height: 2.75rem;
`

const H1 = ({ className, children }) => {
  return (
    <Heading className={className}><h1>{children}</h1></Heading>
  )
}

const H2 = ({ className, children }) => {
  return (
    <Heading className={className}><h2>{children}</h2></Heading>
  )
}

const H3 = ({ className, children }) => {
  return (
    <Heading className={className}><h3>{children}</h3></Heading>
  )
}

const H4 = ({ className, children }) => {
  return (
    <Heading className={className}><h4>{children}</h4></Heading>
  )
}

export { H1, H2, H3, H4 }
