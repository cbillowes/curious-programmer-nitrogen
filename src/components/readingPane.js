import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from './heading'
import { WithHeadingSpacer } from './spacer'
import './styles/ReadingPane.scss'

const ReadingPane = ({ heading, children }) => {
  return (
    <div>
      <WithHeadingSpacer />
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
