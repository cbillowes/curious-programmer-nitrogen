import React from 'react'
import Anchor from './anchor'
import './styles/logo.scss'

function Logo() {
  return (
    <div className="logo">
      <Anchor
        to="/"
        title="Curious Programmer"
        className="full"
      >
        <strong>&#123;</strong> :curious <strong>"programmer"</strong> <strong>&#125;</strong>
      </Anchor>

      <Anchor
        to="/"
        title="Curious Programmer"
        className="partial"
      >
        <strong>&#123;</strong> :curious <strong>&#125;</strong>
      </Anchor>
    </div>
  )
}

export default Logo
