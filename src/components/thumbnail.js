import React from "react"
import PropTypes from "prop-types"
import Anchor from "./anchor"
import "../styles/thumbnail.scss"

const getDefaultThumbnails = () => {
  return [
    { photo: `default-01.jpg`, source: `unsplash`, credit: `Arget`, link: `https://unsplash.com/@arget?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-02.jpg`, source: `unsplash`, credit: `Kevin Ku`, link: `https://unsplash.com/@ikukevk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-03.jpg`, source: `unsplash`, credit: `Ilya Pavlov`, link: `https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-04.jpg`, source: `unsplash`, credit: `Vishnu R Nair`, link: `https://unsplash.com/@vishnurnair?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-05.jpg`, source: `unsplash`, credit: `Markus Spiske`, link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-06.jpg`, source: `unsplash`, credit: `Markus Spiske`, link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-07.jpg`, source: `unsplash`, credit: `Dlanor S`, link: `https://unsplash.com/@dlanor_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-08.jpg`, source: `unsplash`, credit: `Chris Ried`, link: `https://unsplash.com/@cdr6934?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-09.jpg`, source: `unsplash`, credit: `Sai Kiran Anagani`, link: `https://unsplash.com/@_imkiran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText` },
    { photo: `default-10.jpg`, source: `unsplash`, credit: `Markus Spiske`, link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTexts` },
  ]
}

const getResponsiveHeight = (display) => {
  if (display === `landscape`)
    return 600 / 1200 * 100
  return 600 / 600 * 100
}

const getDefaultThumbnail = (number) => {
  const images = getDefaultThumbnails()
  const index = Math.floor(number % images.length)
  return images[index]
}

const getCredit = ({ number, photo, credit, creditSource, creditLink, display }) => {
  const directory = display === `landscape` ? `banners` : `thumbnails`
  const defaultThumbnail = getDefaultThumbnail(number)
  const filename = photo || defaultThumbnail.photo
  return {
    photo: `/static/${directory}/${filename}`,
    attribute: photo ? credit : defaultThumbnail.credit,
    source: photo ? creditSource : defaultThumbnail.source,
    link: photo ? creditLink : defaultThumbnail.link,
  }
}

const getBadgeTitle = (source, attribute) => {
  if (!attribute) return ``

  if (source === `unsplash`)
    return `Download free do whatever you want high-resolution photos from ${attribute}`

  return `Image by ${attribute} @ ${source}`
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

const Link = ({ to }) => {
  return to ? <Anchor to={to} className="link" /> : <></>
}

const Thumbnail = (props) => {
  const credit = getCredit(props)
  const padding = getResponsiveHeight(props.display)
  return (
    <div
      className={`thumbnail ${props.display}`}
      style={{
        backgroundImage: `url("${credit.photo}")`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        paddingTop: `${padding}%`,
      }}>
      <Link to={props.to} s />
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
  display: PropTypes.oneOf([`landscape`, `square`]),
  to: PropTypes.string,
  photo: PropTypes.string,
  credit: PropTypes.string,
  creditLink: PropTypes.string,
  creditSource: PropTypes.string,
}

export default Thumbnail
