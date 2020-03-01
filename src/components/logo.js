import React from 'react'
import Anchor from './anchor'
import './styles/logo.scss'

const Content = () => (
  <>
    <strong>&#123;</strong> :curious <strong>"programmer"</strong> <strong>&#125;</strong>
  </>
)

function Logo() {
  return (
    <div className="logo">
      <Anchor
        to="/"
        title="Curious Programmer"
      >
        <Content />
      </Anchor>
    </div>
  )
}

export default Logo
