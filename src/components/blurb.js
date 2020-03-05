import React from 'react'
import PropTypes from 'prop-types'

const defaultLimit = 250

function stripHtml(content) {
  return content
    .replace(/\s*(:[a-zA-Z0-9\\-]+:)+\s*/gm, ``)
    .replace(/<code([ a-z="\\-]*)>[a-zA-Z0-9 \-~±$./"!@#$%^&*(),:;_\n\r]+<\/code>+/gm, `[code example]`)
    .replace(/{[\w\W]+}/gm, `[code example]`)
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
  if (content.props) {
    const children = content.props.children
    return squashToPlainText(children)
  }
  return content
}

function truncate(text, limit) {
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
  const words = text.trim().split(` `)
  return (
    words.length > limit ?
      `...` :
      ``
  )
}

function getContent(limit, body) {
  const plainText = squashToPlainText(body)
  const content = truncate(plainText, limit)
  const truncated = ellipsies(plainText, limit)
  return `${content}${truncated}`
}

function Blurb({ limit, children }) {
  if (!children) return <></>

  const content = getContent(limit || defaultLimit, children)
  return (
    <>
      <span className="text">
        {content}
      </span>
    </>
  )
}

Blurb.propTypes = {
  children: PropTypes.node.isRequired,
  limit: PropTypes.number,
}

export default Blurb