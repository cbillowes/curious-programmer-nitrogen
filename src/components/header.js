import React, { Component } from "react"
import styled from "styled-components"
import Logo from "./logo"
import Search from "./search"
import Navigation from "./navigation"
import data from "../../gatsby-data.js"

const colors = data.theme.colors

const Container = styled.header`
  background-color: ${colors.darkest};
  margin-bottom: 1.45rem;
  border-bottom: solid 10px ${colors.accentFirst};
  position: fixed;
  right: 0;
  left: 0;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem 1.1rem;
  display: flexbox;
  justify-content: space-between;
  align-items: center;
`

function Header () {

  function toggleSearch(e) {
    e.preventDefault()
    console.log('Search')
  }
  
  function toggleNavigation(e) {
    e.preventDefault()
    this.open = true
  }

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Search onClick={toggleSearch} />
        <Navigation onClick={toggleNavigation} />
      </Wrapper>
    </Container>
  )
}

export default Header
