import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import data from "../../gatsby-data.js"

const colors = data.theme.colors

const Container = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`

const Anchor = styled(Link)`
  color: ${colors.accentFirst};

  &:hover {
    color: ${colors.accentSecond};
  }

  :visited {
    color: ${colors.accentThird};
  }

  :visited:hover {
    color: ${colors.accentFirst};
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 5rem;
  display: inline-block;
  padding: 0 2rem;
`

const ShowMore = ({toggleOnClick, isOpen}) => {
  return (
    <Container 
      onClick={toggleOnClick} 
      className={isOpen ? `active` : ``}
    >
      <Anchor 
        to="/archives"
      >
        <Icon 
          icon={faEllipsisH} 
        />
      </Anchor>
    </Container>
  )
}

export default ShowMore
