const path = require(`path`)
const fs = require("fs")
const sharp = require("sharp")

const rawSrc = `src/images/raw`
const rawDest = `src/images/site`
const rawQuality = 80
const socialMediaQuality = 60
const heroQuality = 50
const thumbnailQuality = 80

/**
 * Keeps a copy of an optimized original image.
 * @param {string} src
 * @param {object} reporter
 */
const toBase = (src, reporter) => {
  const dest = getDest(src, rawDest)
  const quality = rawQuality

  sharp(src)
    .jpeg({ quality })
    .png({ quality })
    .webp({ quality })
    .toFile(dest, err => {
      const message = `optimize image: ${src} -> ${dest}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
}

/**
 * Creates an optimized image resized for social media sharing.
 * @param {string} src
 * @param {object} reporter
 */
const toSocialMedia = (src, reporter) => {
  const dest = getDest(src, rawDest, `social-media`)
  const quality = socialMediaQuality
  const dimensions = { width: 800, height: 800 }

  sharp(src)
    .jpeg({ quality })
    .png({ quality })
    .webp({ quality })
    .resize({
      width: dimensions.width,
      height: dimensions.height,
      kernel: sharp.kernel.nearest,
      fit: sharp.fit.cover,
    })
    .toFile(dest, err => {
      const message = `social media image: ${src} -> ${dest}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
}

/**
 * Creates an optimized image resized for a hero image displayed on grid posts.
 * @param {string} src
 * @param {object} reporter
 */
const toHero = (src, reporter) => {
  const dest = getDest(src, rawDest, `hero`)
  const quality = heroQuality
  const dimensions = { width: 1200, height: 600 }

  sharp(src)
    .jpeg({ quality })
    .png({ quality })
    .webp({ quality })
    .resize({
      width: dimensions.width,
      height: dimensions.height,
      kernel: sharp.kernel.nearest,
      fit: sharp.fit.cover,
      position: sharp.strategy.attention,
    })
    .toFile(dest, err => {
      const message = `hero image: ${src} -> ${dest}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
}

/**
 * Creates an optimized image resized for thumbnails displayed on post listings.
 * @param {string} src
 * @param {object} reporter
 */
const toThumbnail = (src, reporter) => {
  const dest = getDest(src, rawDest, `thumbnail`)
  const quality = thumbnailQuality
  const dimensions = { width: 500, height: 500 }

  sharp(src)
    .jpeg({ quality })
    .png({ quality })
    .webp({ quality })
    .resize({
      width: dimensions.width,
      height: dimensions.height,
      kernel: sharp.kernel.nearest,
      fit: sharp.fit.cover,
    })
    .toFile(dest, err => {
      const message = `thumbnail: ${src} -> ${dest}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
}

/**
 * Deletes the raw image to save space. This way hi-res images can be processed and
 * large media does not need to be stored in this git repo.
 * @param {string} src
 * @param {object} reporter
 */
const unlink = (src, reporter) => {
  fs.unlink(src, () => {
    reporter.verbose(`unlink: ${src}`)
  })
}

module.exports.process = (src, reporter) => {
  if (src.indexOf(rawSrc) >= 0) {
    Promise.all([
      mkdir(rawDest),
      toBase(src, reporter),
      toHero(src, reporter),
      toSocialMedia(src, reporter),
      toThumbnail(src, reporter),
    ]).then(() => {
      unlink(src, reporter)
    })
  }
}

const mkdir = path => {
  fs.existsSync(path) || fs.mkdirSync(path)
}

const getDest = (src, dest, suffix) => {
  const ext = path.extname(src)
  const basename = path.basename(src).replace(ext, ``)
  const filename = suffix ? `${basename}-${suffix}${ext}` : `${basename}${ext}`
  return path.join(dest, filename)
}
