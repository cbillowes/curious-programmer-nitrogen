import React from "react"
import PropTypes from "prop-types"
import PostPreview from "./postPreview"
import Lang from "../../gatsby-lang"
import "../styles/posts.scss"
import { Component } from "react"

const Listing = ({ edges, limit }) => {
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
      layout: "grid",
    }
  }

  changeLayout = (layout) => {
    this.setState({
      layout,
    })
  }

  render() {
    const { edges, limit } = this.props
    if (!edges || edges.length === 0) return <div>{Lang.noPostsAvailable}</div>

    return (
      <div className="posts-container">
        <a className={`button ${this.state.layout === "grid" ? "active" : ""}`} onClick={() => this.changeLayout("grid")}>
          <img src={`/static/svgs/grid.svg`} alt="Display in a grid." />
        </a>
        <a className={`button ${this.state.layout === "listing" ? "active" : ""}`} onClick={() => this.changeLayout("listing")}>
          <img src={`/static/svgs/listing.svg`} alt="Display in a list." />
        </a>
        <div className={`posts ${this.state.layout}`}>
          <Listing edges={edges} truncate={limit} />
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
