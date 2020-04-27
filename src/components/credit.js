import React from "react"
import PropTypes from "prop-types"
import Tag from "./tag"

const Credit = ({ to, title, children }) => {
  const body = children || title
  if (to) {
    return (
      <span>
        <Tag title={title} to={to} />
        {body}
      </span>
    )
  }
  return (
    <span>
      <Tag title={title} />
      {body}
    </span>
  )
}

Credit.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default Credit
