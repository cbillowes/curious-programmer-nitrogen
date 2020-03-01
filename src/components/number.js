import React from 'react'
import './styles/number.scss'

const Number = ({ number }) => {
  return (
    <div
      className="post number ribbon"
      data-component="post-number"
    >
      <div className="backdrop">
        <div className="text">
          #{number}
        </div>
      </div>
    </div>
  )
}

export default Number