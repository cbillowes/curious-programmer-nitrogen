import React, { Component } from 'react'
import './styles/panel.scss'

class Panel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
    }
  }
  
  click() {
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
    return (
      <div 
        className="panel"
      >
        <div 
          className={this.titleClassName()}
          onClick={() => this.click()}>
            {title}
        </div>
        {this.state.clicked ? 
          <div className="body">{children}</div>: 
          <></>
         }
      </div>
    )
  }
}

export default Panel