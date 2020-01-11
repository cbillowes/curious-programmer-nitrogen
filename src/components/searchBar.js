import React, { Component } from "react"
import styled from "styled-components"
import Search from "./search"
import Tag from "./tag"
import Data from "../../gatsby-data"

const Theme = Data.theme

const Container = styled.section`
  background-color: ${Theme.colors.darkest};
  position: absolute;
  top: 6.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: scroll;

  &.open {
    transform: translateX(0%);
    transition: transform .5s ease-in-out;
  }

  &.closed {
    transform: translateX(100%);
    transition: transform .5s ease-in-out;
  }
`

const Text = styled.input`
  background-color: ${Theme.colors.dark};
  border: solid 1px ${Theme.colors.dark};
  padding: 1.5rem 1rem;
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
  margin: 0;
  padding: 1.5rem 0 1.5rem 1.5rem;

  li {
    padding: .5rem 0 .5rem .5rem;
    margin: 0;
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

  &.visible {
    display: block;
  }

  &.hidden {
    display: none;
  }
`

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: `waiting`,
      message: ``,
      query: ``,
      results: props.results ? props.results : [],
    }
  }

  getErrorMessage(error) {
    const apology = `Sorry about this. Search is misbehaving.`
    switch(error.toString()) {
      case `TypeError: Failed to fetch`:
        return `${apology} It failed to fetch the results.`
      case `Error: Connection has timed out`:
        return `${apology} It could not connect to the server.`
      default:
        return apology
    }
  }

  promise(timeout, promise) {
    return new Promise((resolve, reject) => {
      const error = new Error(`Connection has timed out`)
      setTimeout(function() {
        reject(error)
      }, timeout)
      promise.then(resolve, reject)
    })
  }

  setError(error) {
    this.setState({
      status: `error`,
      message: this.getErrorMessage(error),
      results: [],
    })
  }

  performSearch() {
    const timeout = 10000
    const query = this.state.query
    const text = `${encodeURIComponent(query)}`
    const domain = `https://rocket.curiousprogrammer.dev/search/oxygen/query`
    const endpoint = `${domain}/?q=post:${text}&fl=url,title&wt=json`
    
    this.promise(timeout, 
      fetch(endpoint)
        .then(result => result.json())
        .then(result => {
          const results = (result.response) ? result.response.docs : []
          this.setState({
            results: results,
            status: `searched`,
            query: ``,
            searching: ``,
            message: ``,
          })
        })
        .catch((error) => this.setError(error)))
    .catch((error) => this.setError(error))
  }

  search(e) {
    const query = this.state.query
    const isEnter = e.keyCode === 13
    const canSearch = query.length > 0
    const autoSearch = query.length > 5

    if (canSearch && (isEnter || autoSearch)) {
      this.setState({ 
        status: `searching`,
        message: `Gathering data...`,
      })
      this.performSearch()
    }
  }
  
  cull(e) {
    const query = this.state.query
    const isBackspace = e.keyCode === 8

    if (isBackspace)
      this.setState({
        query: query.substring(0, query.length - 1),
        status: `searching`,
        message: `Gathering data...`
      })

    if (query.length === 0)
      this.setState({
        status: `waiting`,
        message: ``,
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
      const title = result.title[0]
      const url = result.url[0]
      return <li><a href={url}>{title.replace(/\| Curious Programmer/gi, "")}</a></li>
    })
  }

  message() {
    const error = this.state.status === `error`
    const errorMessage = (error) ? this.state.message : ``
    const hasResults = this.state.results.length > 0
    const hasSearched = this.state.status === `searched`
    const searching = this.state.status === `searching`
    const searchingMessage = (searching) ? this.state.message : ``

    if (error)
      return <h1>{errorMessage}</h1>

    if (searching)
      return <h1>{searchingMessage}</h1>
    
    if (!hasResults && hasSearched)
      return <h1>Sorry, nothing has come up. Why not try something else.</h1>
  
    return <></>
  }

  tags(tags) {
    if (!tags) return <></>
    return tags.map(function(tag) {
      return (
        <li>
          <Tag 
            slug={tag.slug} 
            tag={tag.tag} 
          />
        </li>
      )
    })
  }

  render() { 
    return (
      <>
        <Search 
          toggleOnClick={this.props.toggleOnClick} 
          isOpen={this.props.isOpen}
        />
        <Container 
          data-container="search-bar"
          className={this.visibilityClassName(this.props.isOpen)}
        >
          <Text 
            ref="searchBar"
            placeholder="What are you looking for?" 
            onKeyUp={(e) => this.search(e)} 
            onKeyDown={(e) => this.cull(e)} 
            onKeyPress={(e) => this.query(e)} 
          />
          <Tags className={this.props.tags ? 'visible' : 'hidden'}>
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
