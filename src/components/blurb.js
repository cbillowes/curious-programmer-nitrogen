import React from "react"
import PropTypes from "prop-types"

const defaultWordLimit = 50

function squashToPlainText(content) {
  if (typeof content === `string`) return content

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

function truncate(text, wordLimit) {
  const words = text.trim().split(` `)
  return (words.length > wordLimit ? words.splice(0, wordLimit) : words).join(` `)
}

function ellipsis(text, wordLimit) {
  const words = text.trim().split(` `)
  return words.length > wordLimit ? `...` : ``
}

export function getContent(wordLimit, body) {
  const plainText = squashToPlainText(body)
  const content = truncate(plainText, wordLimit)
  const truncated = ellipsis(plainText, wordLimit)
  return `${content}${truncated}`
}

function Blurb({ wordLimit, children }) {
  if (!children) return <></>
  const content = getContent(wordLimit || defaultWordLimit, children)
  return (
    <span dangerouslySetInnerHTML={{ __html: content }}></span>
  )
}

Blurb.propTypes = {
  children: PropTypes.node.isRequired,
  wordLimit: PropTypes.number,
}

export default Blurb
