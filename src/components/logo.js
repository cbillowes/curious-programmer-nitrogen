import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import data from "../../gatsby-data.js"

const fonts = data.theme.fonts
const colors = data.theme.colors

const Container = styled.div`
  margin: 0;
  font-family: ${fonts.heading};
  font-size: 1.5rem;
`

const Anchor = styled(Link)`
  text-decoration: none;
  color: ${colors.lightest};
`

const Content = () => (
  <>
    <strong>&#123;</strong> :curious <strong>"programmer"</strong> <strong>&#125;</strong>
  </>
)

function Logo ({ theme }) {
  return (
    <Container>
      <Anchor 
        to="/"
        title="Curious Programmer"
      >
        <Content />
      </Anchor>
    </Container>
  )
}

export default Logo
