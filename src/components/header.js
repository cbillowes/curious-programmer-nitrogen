import React, { Component } from "react"
import Logo from "./logo"
import SearchBar from "./searchBar"
import Navigation from "./navigation"
import './styles/header.scss'

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
      <header className="header">
        <div className="wrapper">
          <Logo />
          <SearchBar
            toggleOnClick={this.toggleSearch.bind(this)}
            isOpen={this.state.isSearchOpen}
          />
          <Navigation
            toggleOnClick={this.toggleNavigation.bind(this)}
            isOpen={this.state.isMenuOpen}
          />
        </div>
      </header>
    )
  }
}

export default Header
