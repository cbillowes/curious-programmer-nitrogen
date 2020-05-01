import React from "react"
import PropTypes from "prop-types"
import "../styles/thumbnail.scss"

const width = 800
const height = 250

const getDefaultThumbnails = () => {
  return [
    { photo: `default-01.jpg`, source: `unsplash`, credit: `Joanna Kosinska`, link: `https://unsplash.com/@joannakosinska?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-02.jpg`, source: `unsplash`, credit: `Jason Leung`, link: `https://unsplash.com/@ninjason?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-03.jpg`, source: `unsplash`, credit: `Paul Hanaoka`, link: `https://unsplash.com/@plhnk?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-04.jpg`, source: `unsplash`, credit: `Jess Bailey`, link: `https://unsplash.com/@jessbailey?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-05.jpg`, source: `unsplash`, credit: `sydney Rae`, link: `https://unsplash.com/@srz?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-06.jpg`, source: `unsplash`, credit: `Joanna Kosinska`, link: `https://unsplash.com/@joannakosinska?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-07.jpg`, source: `unsplash`, credit: `Joel Filipe`, link: `https://unsplash.com/@joelfilip?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-08.jpg`, source: `unsplash`, credit: `Anna Kolosyuk`, link: `https://unsplash.com/@anko_?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-09.jpg`, source: `unsplash`, credit: `Jess Bailey`, link: `https://unsplash.com/@jessbailey?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
    { photo: `default-10.jpg`, source: `unsplash`, credit: `Aleksander Vlad`, link: `https://unsplash.com/@aleksowlade?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` },
  ]
}

const getResponsiveHeight = () => {
  return height / width * 100
}

const getDefaultThumbnail = (number) => {
  const images = getDefaultThumbnails()
  const index = Math.floor(number % images.length)
  return images[index]
}

const getCredit = ({ number, photo, creditSource, credit, creditLink }) => {
  const defaultThumbnail = getDefaultThumbnail(number)
  const filename = photo || defaultThumbnail.photo
  return {
    photo: `/static/thumbnails/${filename}`,
    source: photo ? creditSource : defaultThumbnail.source,
    attribute: photo ? credit : defaultThumbnail.credit,
    link: photo ? creditLink : defaultThumbnail.link,
  }
}

const getBadgeTitle = (source, attribute) => {
  if (source === `unsplash`)
    return `Download free do whatever you want high-resolution photos from ${attribute}`

  return `Image by ${attribute}`
}

const getSourceLogo = (source) => {
  if (source === `unsplash`)
    return `/static/svgs/unsplash.svg`
  return `/static/svgs/download.svg`
}

const Badge = ({ source, attribute, link }) => {
  const title = getBadgeTitle(source, attribute)
  return (
    <a
      className={`badge ${link ? "clickable" : "stagnant"}`}
      title={title}
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      <span className="source-logo">
        <img src={getSourceLogo(source)} alt={source} />
      </span>
      <span className="attribute">{attribute}</span>
    </a>
  )
}

const Thumbnail = (props) => {
  const credit = getCredit(props)
  const padding = getResponsiveHeight()
  return (
    <div
      className="thumbnail"
      style={{
        backgroundImage: `url("${credit.photo}")`,
        backgroundSize: `cover`,
        paddingTop: `${padding}%`,
      }}>
      <Badge
        source={credit.source}
        attribute={credit.attribute}
        link={credit.link}

      />
    </div>
  )
}

Thumbnail.propTypes = {
  number: PropTypes.number.isRequired,
  photo: PropTypes.string,
  credit: PropTypes.string,
  creditLink: PropTypes.string,
  creditSource: PropTypes.string,
}

export default Thumbnail
