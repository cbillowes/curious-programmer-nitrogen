import React from 'react'
import './styles/spacer.scss'

const WithoutHeadingSpacer = () => {
  return (
    <div className="spacer no-heading"></div>
  )
}

const WithHeadingSpacer = () => {
  return (
    <div className="spacer with-heading"></div>
  )
}

const LargeSpacer = () => {
  return (
    <div className="spacer large"></div>
  )
}

export { WithoutHeadingSpacer, WithHeadingSpacer, LargeSpacer }
