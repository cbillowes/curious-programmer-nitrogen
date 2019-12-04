import React, { Component } from "react"
import styled from "styled-components"
import Logo from "./logo"
import SearchBar from "./searchBar"
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

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: this.props.isMenuOpen ? this.props.isMenuOpen : false,
      isSearchOpen: this.props.isSearchOpen ? this.props.isSearchOpen : false,
    }
  }

  toggleSearch(e) {
    e.preventDefault()
    this.setState({
      isSearchOpen: !this.state.isSearchOpen,
      isMenuOpen: false,
    })
  }

  toggleNavigation = (e) => {
    e.preventDefault()
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
      isSearchOpen: false,
    })
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Logo />
          <SearchBar toggleOnClick={this.toggleSearch.bind(this)} isOpen={this.state.isSearchOpen} />
          <Navigation toggleOnClick={this.toggleNavigation.bind(this)} isOpen={this.state.isMenuOpen} />
        </Wrapper>
      </Container>
    )
  }
}

export default Header
