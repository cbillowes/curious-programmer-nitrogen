import path from "path"
import React from "react"
import PropTypes from "prop-types"
import Anchor from "./anchor"
import "../styles/thumbnail.scss"

const thumbnails = [
  {
    photo: `default-01.jpg`,
    source: `unsplash`,
    credit: `Arget`,
    link: `https://unsplash.com/@arget?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-02.jpg`,
    source: `unsplash`,
    credit: `Kevin Ku`,
    link: `https://unsplash.com/@ikukevk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-03.jpg`,
    source: `unsplash`,
    credit: `Ilya Pavlov`,
    link: `https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-04.jpg`,
    source: `unsplash`,
    credit: `Vishnu R Nair`,
    link: `https://unsplash.com/@vishnurnair?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-05.jpg`,
    source: `unsplash`,
    credit: `Markus Spiske`,
    link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-06.jpg`,
    source: `unsplash`,
    credit: `Markus Spiske`,
    link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-07.jpg`,
    source: `unsplash`,
    credit: `Dlanor S`,
    link: `https://unsplash.com/@dlanor_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-08.jpg`,
    source: `unsplash`,
    credit: `Chris Ried`,
    link: `https://unsplash.com/@cdr6934?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-09.jpg`,
    source: `unsplash`,
    credit: `Sai Kiran Anagani`,
    link: `https://unsplash.com/@_imkiran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  },
  {
    photo: `default-10.jpg`,
    source: `unsplash`,
    credit: `Markus Spiske`,
    link: `https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTexts`,
  },
]

const getBadgeTitle = (source, attribute) => {
  if (!attribute) return ``

  if (source && source.toLowerCase() === `unsplash`)
    return `Download free do whatever you want high-resolution photos from ${attribute}`

  return `Image by ${attribute} @ ${source}`
}

const getBadgeLogo = source => {
  if (source === `unsplash`) return `/svgs/unsplash.svg`
  return `/svgs/download.svg`
}

const Badge = ({ credit, source, link }) => {
  const title = getBadgeTitle(source, credit)
  const logo = getBadgeLogo(source)

  return (
    <Anchor className={`badge ${link ? `linked` : `stagnant`}`} title={title}>
      <span className="source-logo">
        <img src={logo} alt={source} />
      </span>
      <span className="attribute">{credit}</span>
    </Anchor>
  )
}

const Link = ({ to, children }) => {
  return (
    <Anchor to={to} className="slug">
      {children}
    </Anchor>
  )
}

const Thumbnail = props => {
  const { to } = props
  const credits = getCreditOrDefaultProps(props)
  return (
    <div className="thumbnail">
      <Link to={to}>{credits.component}</Link>
      <Badge {...credits} />
    </div>
  )
}

const renderCreditThumbnail = filename => {
  const componentName = filename.replace(path.extname(filename), ``)
  return require(`./images/${componentName}`).default()
}

const getDefaultCreditPropByNumber = number => {
  return thumbnails[number % (thumbnails.length - 1)]
}

const getCreditOrDefaultProps = props => {
  try {
    if (props.photo) {
      return Object.assign({}, props, {
        component: renderCreditThumbnail(props.photo),
      })
    } else {
      const prop = getDefaultCreditPropByNumber(props.number)
      return Object.assign({}, prop, {
        component: renderCreditThumbnail(prop.photo),
      })
    }
  } catch (e) {
    const prop = thumbnails[0]
    return Object.assign({}, prop, {
      component: renderCreditThumbnail(prop.photo),
    })
  }
}

Thumbnail.propTypes = {
  number: PropTypes.number,
  to: PropTypes.string,
  photo: PropTypes.string,
  credit: PropTypes.string,
  source: PropTypes.string,
  link: PropTypes.string,
}

export default Thumbnail
