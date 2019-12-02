import React, { Component } from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Search from "./search"
import Tag from "./tag"
import Data from "../../gatsby-data"

const Theme = Data.theme

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${Theme.colors.darkest};
`

const Text = styled.input`
  background-color: ${Theme.colors.dark};
  border: solid 1px ${Theme.colors.dark};
  padding: 1.5rem 3rem;
  font-size: 3rem;
  color: ${Theme.colors.light};
  width: 100%;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    padding: 1.5rem 3rem 1.5rem 1.5rem;
    font-size: 1.5rem;
  }
`

const Results = styled.ul`
  list-style: none;

  li {
    padding: .5rem;
    font-family: ${Theme.fonts.results};
    color: ${Theme.colors.light};
  }

  a {
    font-family: ${Theme.fonts.results};
    color: ${Theme.colors.light};
    text-decoration: none;
  }

  a:hover {
    color: ${Theme.colors.accentFirst};
  }
`

const Tags = styled.ul`
  padding: .5rem 2.5rem;
  list-style: none;

  li {
    display: inline-block;
  }
`

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSearched: false,
      query: '',
      results: props.results,
      error: false,
    }
  }

  getErrorMessage(error) {
    const apology = `Sorry about this. Search is misbehaving.`
    switch(error.toString()) {
      case `TypeError: Failed to fetch`:
        return `${apology} It failed to fetch the results.`
      default:
        return apology
    }
  }

  performSearch() {
    const query = this.state.query
    const text = `${encodeURIComponent(query)}`
    const domain = `https://curiousprogrammer.tk`
    const endpoint = `${domain}/?q=text:${text}&fl=url,title&rows=20&wt=json`
    fetch(endpoint)
      .then((result) => result.json)
      .then(
        (result) => {
          const results = (result.response) ? result.response.docs : []
          this.setState({
            results: results,
            error: false,
          })
        },
        (error) => {
          this.setState({
            results: [],
            error: true,
            errorMessage: this.getErrorMessage(error) 
          })
        })
  }

  search(e) {
    const query = this.state.query
    const isEnter = e.keyCode === 13
    const canSearch = query.length > 0
    const autoSearch = query.length > 5
    
    if (canSearch && (isEnter || autoSearch)) {
      this.performSearch()
      this.setState( {
        hasSearched: true,
      })
    }
  }
  
  cull(e) {
    const query = this.state.query
    const isBackspace = e.keyCode === 8

    if (isBackspace)
      this.setState({
        query: query.substring(0, query.length - 1),
      })
  }

  query(e) {
    const isEnter = e.key === "Enter"
    
    if (!isEnter)
      this.setState({ 
        query: `${this.state.query}${e.key}`,
      })
  }

  visibilityClassName(open) {
    return open ? `open` : `closed`
  }

  searchResults() {
    const results = this.state.results

    if (!results) return <></>
    return results.map(function(result) {
      return <li><Link to={result.to}>{result.text}</Link></li>
    })
  }

  message() {
    const error = this.state.error
    const errorMessage = this.state.errorMessage
    const hasResults = this.state.results.length > 0
    const hasSearched = this.state.hasSearched

    if (error)
      return <h1>{errorMessage}</h1>
    
    if (!hasResults && hasSearched)
      return <h1>Sorry, nothing has come up. Why not try something else.</h1>
  
    return <></>
  }

  tags(tags) {
    if (!tags) return <></>
    return tags.map(function(tag) {
      return <li><Tag slug={tag.slug} tag={tag.tag} /></li>
    })
  }

  render() { 
    return (
      <>
        <Search toggleOnClick={this.props.toggleOnClick} isOpen={this.props.isOpen} />
        <Container className={this.visibilityClassName(this.props.isOpen)}>
          <Text 
            placeholder="What are you looking for?" 
            onKeyUp={(e) => this.search(e)} 
            onKeyDown={(e) => this.cull(e)} 
            onKeyPress={(e) => this.query(e)} />
          <Tags>
            {this.tags(this.props.tags)}
          </Tags>
          <Results>
            {this.message()}
            {this.searchResults()}
          </Results>
        </Container>
      </>
    )
  }
}

export default SearchBar
