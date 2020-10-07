import React, { Component } from "react"
import Logo from "./logo"
import Navigation from "./navigation"
import "../styles/header.scss"

const toggleNavigation = e => {
  e.preventDefault()
  this.setState({
    isMenuOpen: !this.state.isMenuOpen,
  })
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: this.props.isMenuOpen ? this.props.isMenuOpen : false,
    }
  }

  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <Logo />
          <Navigation
            toggleOnClick={toggleNavigation.bind(this)}
            isOpen={this.state.isMenuOpen}
          />
        </div>
      </header>
    )
  }
}

export default Header
