import React, { Component } from "react"
import PropTypes from "prop-types"
import PostPreview from "./postPreview"
import Lang from "../../gatsby-lang"
import "../styles/posts-actions.scss"
import "../styles/posts-layout.scss"

const Listing = ({ edges, limit }) => {
  if (!edges || edges.length === 0) return <div>{Lang.posts.none}</div>

  return edges.map(edge => {
    const { timeToRead, excerpt } = edge.node
    const { slug, date, number } = edge.node.fields
    const { title, photo, credit, creditSource, creditLink, tags } = edge.node.frontmatter
    const author = "Clarice Bouwer"
    return (
      <PostPreview
        key={slug}
        limit={limit}
        title={title}
        slug={slug}
        tags={tags}
        author={author}
        date={date}
        ttr={timeToRead}
        number={number}
        photo={photo}
        credit={credit}
        creditSource={creditSource}
        creditLink={creditLink}
      >
        {excerpt}
      </PostPreview>
    )
  })
}

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      originalEdges: props.edges,
      layout: `grid`,
      phrase: ``,
      searching: false,
      edges: props.edges,
    }
  }

  changeLayout = (layout) => {
    this.setState({
      layout,
    })
  }

  search = (e) => {
    const phrase = e.target.value.toLowerCase()
    const edges = this.state.originalEdges
      .filter(edge => edge.node.frontmatter.title.toLowerCase().indexOf(phrase) > -1)
    this.setState({
      edges: edges,
      phrase: phrase,
      searching: phrase.length > 0,
    })
  }

  reset = () => {
    this.setState({
      phrase: ``,
      searching: false,
      edges: this.state.originalEdges,
    })
  }

  toggleSearching = () => {
    const searching = this.state.phrase.length > 0 || this.searching
    this.setState({
      searching: searching
    })
  }

  results = () => {
    const results = this.state.edges.length
    if (!this.state.searching) return <span className="result">{results} results.</span>
    if (results === 0) {
      return <span role="img" aria-label="pensive">😞<span className="result">Nope. Nothing.</span></span>
    }

    if (results === 1) {
      return <span role="img" aria-label="smiling">😊<span className="result">1 result.</span></span>
    }

    return <span role="img" aria-label="tada">🎉<span className="result">{results} results.</span></span>
  }

  render() {
    const { limit } = this.props
    return (
      <div className="posts-container">
        <div className="actions">
          <button className={`button multi-column ${this.state.layout === "grid" ? "active" : ""}`} onClick={() => this.changeLayout("grid")}>
            <img src="/static/svgs/grid.svg" alt="Display in a verbose grid." />
          </button>
          <button className={`button single-column ${this.state.layout === "grid" ? "active" : ""}`} onClick={() => this.changeLayout("grid")}>
            <img src="/static/svgs/vertical-list.svg" alt="Display in a verbose list." />
          </button>
          <button className={`button ${this.state.layout === "listing" ? "active" : ""}`} onClick={() => this.changeLayout("listing")}>
            <img src="/static/svgs/listing.svg" alt="Display in a compact list." />
          </button>
          <span className={`search ${this.state.searching ? `active` : ``}`}>
            <button className="button search-btn">
              <img src="/static/svgs/search.svg" alt="Search" />
            </button>
            <button className={`button reset-btn`} onClick={this.reset}>
              <img src="/static/svgs/close.svg" alt="Start over" />
            </button>
            <input
              className="search-bar"
              type="text"
              onBlur={this.toggleSearching}
              onClick={this.toggleSearching}
              onChange={this.search}
              placeholder="Search a title"
              value={this.state.phrase}
            />
            <div className="search-results">{this.results()}</div>
          </span>
        </div>
        <div className={`posts ${this.state.layout}`}>
          <Listing edges={this.state.edges} truncate={limit} />
        </div>
      </div>
    )
  }
}

Posts.defaultProps = {
  limit: 50,
}

Posts.propTypes = {
  edges: PropTypes.array.isRequired,
  limit: PropTypes.number,
}

export default Posts
