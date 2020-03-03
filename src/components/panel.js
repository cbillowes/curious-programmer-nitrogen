import React, { Component } from 'react'
import './styles/panel.scss'

class Panel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
    }
  }

  onExpand() {
    const current = this.state.clicked;
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
      <div
        className="panel"
      >
        <button
          className={this.titleClassName()}
          onClick={this.onExpand.bind(this)}>
          {title}
        </button>
        {this.state.clicked ?
          <div className="body">{children}</div> :
          <></>
        }
      </div>
    )
  }
}

export default Panel