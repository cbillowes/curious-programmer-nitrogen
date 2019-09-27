import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import Menu from "./menu"
import Search from "./search"
import data from "../../gatsby-data.js"

const colors = data.theme.colors
const fonts = data.theme.fonts

const Container = styled.header`
  background-color: ${colors.darkest};
  margin-bottom: 1.45rem;
  border-bottom: solid 10px ${colors.accentFirst};
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.1rem;
  display: flexbox;
  justify-content: space-between;
  align-items: center;
`

const RightPull = styled.div`
`

function Header ({ theme }) {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <RightPull>
          <Search />
          <Menu />
        </RightPull>
      </Wrapper>
    </Container>
  )
}

export default Header
