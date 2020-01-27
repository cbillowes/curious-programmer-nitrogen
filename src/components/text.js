import React from 'react'

const defaultLimit = 250

function squashToPlainText(content) {
  if (typeof content === `string`) 
    return content

  if (Array.isArray(content)) {
    let plainText = ``
    content.map(html => {
      if (typeof html === `string`) {
        plainText = `${plainText} ${html}`.trim()
      } else {
        const squashed = squashToPlainText(html.props.children)
        plainText = `${plainText} ${squashed}`
      }
      return plainText
    })
    return plainText
  }

  const children = content.props.children
  return squashToPlainText(children)
}

function truncate(text, limit) {
  if (!text) return ``

  const words = text.trim().split(` `)
  return (
    (
      words.length > limit ?
      words.splice(0, limit) :
      words
    ).join(` `)
  )
}

function ellipsies(text, limit) {
  if (!text) return ``

  const words = text.trim().split(` `)
  return (
    words.length > limit ?
    `...` :
    ``
  )
}

function Blurb({ limit, children }) {
  const truncation = limit || defaultLimit
  const plainText = squashToPlainText(children)
  const truncated = truncate(plainText, truncation)
  const more = ellipsies(plainText, truncation)
  return (
    <>
      <span>
        {truncated}
        {more}
      </span>
    </>
  )
}

export default Blurb