import React from 'react'
import PropTypes from 'prop-types'
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

Number.propTypes = {
  number: PropTypes.number,
}

export default Number
