import React from 'react'
import Anchor from "./anchor"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './styles/more.scss'

const ShowMore = () => {
  return (
    <div
      className="show-more"
      data-component="show-more"
    >
      <Anchor 
        to="/archives"
        title="Show more articles"
        defaultStyle="true"
      >
        <FontAwesomeIcon 
          icon={faEllipsisH} 
        />
      </Anchor>
    </div>
  )
}

export default ShowMore
