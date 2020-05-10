import React from "react"
import PropTypes from "prop-types"
import Moment from "react-moment"
import Lang from "../../gatsby-lang"
import "../styles/metadata.scss"

const moment = require("moment")
const metadata = Lang.posts.metadata

function renderDate(date) {
  const isoFormat = `YYYY-MM-DD`
  const convertedDate = new Date(date)
  const then = moment(convertedDate, isoFormat)
  const format = metadata.date.format
  return (
    <>
      <Moment format={format}>{then}</Moment>
    </>
  )
}

function PostMetadata({ date, author, timeToRead }) {
  moment.updateLocale(Lang.locale)
  return (
    <>
      <div className="metadata">
        {metadata.date.prefix}
        {` `}
        {renderDate(date)}
        {` `}
        <span>{metadata.author(author)}</span>
        {` `}
        <span>{metadata.ttr(timeToRead)}</span>
      </div>
    </>
  )
}

PostMetadata.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  author: PropTypes.string,
}

export default PostMetadata
//TODO: don't show date when invalid - is it possible?
