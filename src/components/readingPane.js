import React from 'react'
import { H1 } from './heading'
import { SmallSpacer } from './spacer'

const ReadingPane = ({ heading, children }) => {
  return (
    <div>
      <SmallSpacer />
      <H1>{heading}</H1>
      <div className="reading-panel">
        {children}
      </div>
    </div>
  )
}

export default ReadingPane