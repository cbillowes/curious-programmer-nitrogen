import React from 'react'

const defaultLimit = 250

function stripHtml(content) {
  return content
    .replace(/\s*(:[a-z]+:)+\s*/gm, `.`)
    .replace(/<code([ a-z="\-]*)>[a-zA-Z0-9 \-~±$\.\/"!@#$%^&*():\n\r]+<\/code>+/gm, `[code example]`)
    .replace(/(<\/?[a-zA-Z0-9 ="#/:?.\-_()]+>)/gm, ``)
    .trim()
}

function squashToPlainText(content) {
  if (typeof content === `string`) 
    return stripHtml(content)

  if (Array.isArray(content)) {
    let plainText = ``
    content.map(html => {
      if (typeof html === `string`) {
        plainText = `${plainText} ${html.trim()}`.trim()
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