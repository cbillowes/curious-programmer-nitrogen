import React from 'react'
import './styles/spacer.scss'

const NoHeadingSpacer = () => {
  return (
    <div className="spacer no-heading"></div>
  )
}

const SmallSpacer = () => {
  return (
    <div className="spacer small"></div>
  )
}

const LargeSpacer = () => {
  return (
    <div className="spacer large"></div>
  )
}

export { NoHeadingSpacer, SmallSpacer, LargeSpacer }