import React, { Component } from "react"
import PropTypes from "prop-types"
import "../styles/panel.scss"

class Panel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
    }
  }

  onExpand() {
    const current = this.state.clicked
    this.setState({
      clicked: !current,
    })
  }

  titleClassName() {
    return `title ${this.state.clicked ? `active` : ``}`
  }

  render() {
    const { title, children } = this.props
    if (!title || !children) return <></>

    return (
      <div key={title} className="panel">
        <button
          className={this.titleClassName()}
          onClick={this.onExpand.bind(this)}
        >
          {title}
        </button>
        {this.state.clicked ? <div className="body">{children}</div> : <></>}
      </div>
    )
  }
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Panel
