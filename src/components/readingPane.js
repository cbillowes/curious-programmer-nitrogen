import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from './heading'
import '../styles/readingPane.scss'

const ReadingPane = ({ heading, children }) => {
  return (
    <div>
      <H1>{heading}</H1>
      <div className="reading-pane">
        {children}
      </div>
    </div>
  )
}

ReadingPane.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ReadingPane
