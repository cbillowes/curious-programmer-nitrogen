import React from 'react'
import PropTypes from 'prop-types'
import Anchor from "./anchor"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import '../styles/more.scss'

const ShowMore = ({ to, title }) => {
  return (
    <div
      className="show-more"
    >
      <Anchor
        to={to}
        title={title}
      >
        <FontAwesomeIcon
          icon={faEllipsisH}
        />
      </Anchor>
    </div>
  )
}

ShowMore.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default ShowMore
