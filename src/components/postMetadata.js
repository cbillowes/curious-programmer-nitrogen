import React from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import Lang from '../../gatsby-lang'

const moment = require('moment')
const metadata = Lang.posts.metadata

const Metadata = styled.div`
  font-style: italic;
`

function renderDate(date) {
  const isoFormat = `YYYY-MM-DD`
  const convertedDate = new Date(date)
  const then = moment(convertedDate, isoFormat)
  const format = metadata.date.format
  return (
    <>
      <Moment 
        format={format}>
          {then}
      </Moment>
    </>
  )
}

function PostMetadata({ date, author, ttr }) {
  moment.updateLocale(Lang.locale)
  return (
    <>
      <Metadata>
        {metadata.date.prefix}{` `}
        {renderDate(date)}{` `}
        <span data-container="metadata-author">
          {metadata.author(author)}
        </span>{` `}
        <span data-container="metadata-ttr">
          {metadata.ttr(ttr)}
        </span>
      </Metadata>
    </>
  )
}

export default PostMetadata