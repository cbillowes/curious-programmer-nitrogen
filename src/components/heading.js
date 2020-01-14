import React from 'react'
import styled from 'styled-components'
import Constants from '../../gatsby-data'

const Heading = styled.div`
  font-family: ${Constants.theme.fonts.heading};
  font-size: 130%;
`

const H1 = ({ children }) => {
  return (
    <Heading><h1>{children}</h1></Heading>
  )
}

const H2 = ({ children }) => {
  return (
    <Heading><h2>{children}</h2></Heading>
  )
}

const H3 = ({ children }) => {
  return (
    <Heading><h3>{children}</h3></Heading>
  )
}

const H4 = ({ children }) => {
  return (
    <Heading><h4>{children}</h4></Heading>
  )
}

export { H1, H2, H3, H4 }
