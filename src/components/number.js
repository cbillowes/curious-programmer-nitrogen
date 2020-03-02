import React from 'react'
import './styles/number.scss'

const Number = ({ number }) => {
  if (!number) return <></>

  return (
    <div
      className="post number ribbon"
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