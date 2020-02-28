import React, { Component } from 'react'
import Anchor from './anchor'
import Search from './search'
import Loader from './loader'
import { SmallSpacer } from './spacer'
import { H1 } from './heading'
import './styles/search.scss'

const timeout = 10000
const domain = `https://rocket.curiousprogrammer.dev/search/oxygen/query`

function quickPromise(timeout, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Connection has timed out`))
    }, timeout)
    promise.then(resolve, reject)
  })
}

const ContactMe = ({ children }) => {
  return <Anchor to="/about" title="Contact me">{children}</Anchor>
}

const ErrorMessage = ({ error }) => {
  const type = error.toString()

  let message
  switch (type) {
    case `Error: Too many consecutive tries`:
      message = `You've tried one too many times. The server doesn\`t like that. :[`
      break;

    case `TypeError: Failed to fetch:`:
      message = `Fetching data from the API simply didn't happen. O_o`
      break;

    case `Error: Connection has timed out`:
      message = `The connection porked out. ¯\_(ツ)_/¯`
      break;

    default:
      message = `Something ominous is going on! ¯\(°_o)/¯`
  }

  return (
    <div className="error">
      <H1>Shit! Sorry about this.</H1>
      <p>
        {message}
        <br/>
        Debug the network activity for fun.
        <br/>
        Be a sport and <ContactMe>tell me</ContactMe> about it.
      </p>
    </div>
  )
}

const Status = ({ searching, error, results }) => {
  if (searching) return <Loader />
  if (error) return <ErrorMessage error={error} />
  if (results && results.length === 0) return <EmptyResultsMessage />
  return <></>
}

const EmptyResultsMessage = () => {
  return (
    <div className="empty-results">
      <H1>Sorry.</H1>
      <p>
        So one of two things could have happend here.<br/>
        Either the indexing has stopped working or I haven't written about it.<br/>
        I am sorry that I can&rsquo;t tell you which one it is.
      </p>
    </div>
  )
}

const Results = ({ results }) => {
  if (!results) return <></>

  return (
    <>
      <ul className="results">
        {results.map(result => {
          const title = result.title[0].replace(/\| Curious Programmer/gi, ``)
          const url = result.url[0]
          return (
            <li>
              <Anchor to={url} title={title}>{title}</Anchor>
            </li>
          )
        })}
      </ul>
    </>
  )
}

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ``,
      error: ``,
      searching: false,
      results: [],
    }
  }

  query(e) {
    if (e.key !== `Enter`)
      this.setState({
        query: `${this.state.query}${e.key}`
      })
  }

  search(e) {
    const enter = e.keyCode === 13

    if (enter) {
      this.setState({
        searching: true,
      })

      this.fetch()
    }
  }

  cull(e) {
    const query = this.state.query
    const backspace = e.keyCode === 8

    if (backspace) {
      this.setState({
        query: query.substring(0, query.length - 1),
      })
      this.search(e)
    }

    if (query.length === 0) {
      this.setState({
        searching: false,
      })
    }
  }

  setError(error) {
    this.setState({
      searching: false,
      error: error,
      results: [],
    })
  }

  fetch() {
    const query = this.state.query
    const queryString = encodeURIComponent(query)
    const endpoint = `${domain}/?q=post:${queryString}&fl=url,title&wt=json`

    quickPromise(timeout,
      fetch(endpoint)
        .then(result => result.json())
        .then(result => {
          const results = result.response ? result.response.docs : []
          this.setState({
            results: results,
            searching: false,
          })
        })
        .catch(error => this.setError(error)))
      .catch(error => this.setError(error))
  }

  render() {
    const { toggleOnClick, isOpen } = this.props
    const panelClassName = `search ${isOpen ? `open` : `closed`}`

    return (
      <>
        <Search
          toggleOnClick={toggleOnClick}
          isOpen={isOpen}
        />
        <div className={panelClassName}>
          <input
            placeholder="Looking for something?"
            className="search-box"
            onKeyUp={(e) => this.search(e)}
            onKeyDown={(e) => this.cull(e)}
            onKeyPress={(e) => this.query(e)}
          />
          <SmallSpacer />
          <Status
            searching={this.state.searching}
            error={this.state.error}
            results={this.state.results}
          />
          <Results
            results={this.state.results}
          />
        </div>
      </>
    )
  }
}

export default SearchBar
