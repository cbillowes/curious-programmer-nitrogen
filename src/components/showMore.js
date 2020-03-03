import React from 'react'
import Anchor from "./anchor"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './styles/more.scss'

const ShowMore = ({ to, title }) => {
  return (
    <div
      className="show-more"
    >
      <Anchor
        to={to}
        title={title}
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

//TODO: add proptypes