import React, { Component } from "react"
import PropTypes from "prop-types"
import PostPreview from "./postPreview"
import Lang from "../../gatsby-lang"
import "../styles/posts.scss"

const Listing = ({ edges, limit }) => {
  if (!edges || edges.length === 0) return <div>{Lang.posts.none}</div>

  return edges.map(edge => {
    const { timeToRead, excerpt } = edge.node
    const { slug, date, number } = edge.node.fields
    const { title, photo, credit, creditLink, tags } = edge.node.frontmatter
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
    })
  }

  render() {
    const { limit } = this.props
    return (
      <div className="posts-container">
        <div className="actions">
          <button className={`button ${this.state.layout === "grid" ? "active" : ""}`} onClick={() => this.changeLayout("grid")}>
            <img src="/static/svgs/grid.svg" alt="Display in a grid." />
          </button>
          <button className={`button ${this.state.layout === "listing" ? "active" : ""}`} onClick={() => this.changeLayout("listing")}>
            <img src="/static/svgs/listing.svg" alt="Display in a list." />
          </button>
          <button className="button search-btn">
            <img src="/static/svgs/search.svg" />
          </button>
          <input className="search-bar" type="text" onChange={this.search} />
        </div>
        <div>{this.state.phrase}</div>
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
