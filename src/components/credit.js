import React from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'

const Credit = ({ to, title, children }) => {
  const body = children || title
  if (to) {
    return (
      <div>
        <Tag
          title={title}
          to={to}
        />
        {body}
      </div>
    )
  }
  return (
    <div>
      <Tag
        title={title}
      />
      {body}
    </div>
  )
}

Credit.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default Credit
