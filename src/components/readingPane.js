import React from 'react'
import { H1 } from './heading'
import { SmallSpacer } from './spacer'
import './styles/ReadingPane.scss'

const ReadingPane = ({ heading, children }) => {
  return (
    <div>
      <SmallSpacer />
      <H1>{heading}</H1>
      <div className="reading-pane">
        {children}
      </div>
    </div>
  )
}

export default ReadingPane