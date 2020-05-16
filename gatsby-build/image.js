const _ = require("lodash")
const path = require(`path`)
const fs = require("fs")
const sharp = require("sharp")

const rawSrc = `src/images/raw`
const rawDest = `src/images/root`
const rawQuality = 100

const imgTemplateSrc = path.join(__dirname, `img.jsx.template`)
const socialMediaQuality = 80
const socialMediaSrc = path.join(__dirname, `../src/images/root`)
const socialMediaRootDest = path.join(__dirname, `../src/images/social-media`)
const gifsDest = path.join(__dirname, `../`, `/public/gifs`)
const svgsDest = path.join(__dirname, `../`, `/public/svgs`)
const socialMediaDest = path.join(__dirname, `../`, `/public/social-media`)
const staticDest = path.join(__dirname, `../public`)
const componentsDest = path.join(__dirname, `../`, `/src/components/images/`)

/**
 * Keeps a copy of an optimized original image that has been resized to ensure uniformity.
 * @param {string} src
 */
const toRoot = src => {
  const dest = getDest(src, rawDest)
  const quality = rawQuality

  mkdir(rawDest)
  sharp(src)
    .jpeg({ quality })
    .png({ quality })
    .webp({ quality })
    .resize(1920, 1080, {
      fit: sharp.fit.cover,
      position: sharp.strategy.attention,
    })
    .toFile(dest, err => {
      const message = `optimize image: ${src} -> ${dest}`
      if (err) {
        return `${message}\n${err}`
      } else {
        return message
      }
    })
}

/**
 * Creates an optimized image resized for social media sharing.
 * @param {string} src
 */
const toSocialMedia = src => {
  const dest = getDest(src, socialMediaRootDest)
  const quality = socialMediaQuality
  const dimensions = { width: 1200, height: 600 }
  mkdir(socialMediaRootDest)
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
        return `${message}\n${err}`
      } else {
        return Promise.resolve(message)
      }
    })
}

const getComponentName = filename => {
  const extensionless = filename.replace(path.extname(filename), ``)
  const camel = _.camelCase(extensionless)
  const upper = _.startCase(camel)
  const tidied = upper.replace(/ /g, ``).replace(/\-/g, ``)
  return tidied
}

const toComponent = src => {
  mkdir(componentsDest)
  fs.readFile(imgTemplateSrc, (err, data) => {
    if (err) {
      return `image template: ${src}\n${err}`
    } else {
      const filename = path.basename(src)
      const destFilename = filename.replace(path.extname(filename), `.js`)
      const dest = path.join(componentsDest, destFilename)

      const componentName = getComponentName(filename)
      const imageFilename = filename
      const imageWidth = 960

      const component = data
        .toString()
        .replace(/%COMPONENT_NAME%/g, componentName)
        .replace(/%IMAGE_FILENAME%/g, imageFilename)
        .replace(/%IMAGE_WIDTH%/, imageWidth)

      fs.writeFile(dest, component, () => {
        return `component: -> ${dest}`
      })
    }
  })
}

/**
 * Deletes the raw image to save space. This way hi-res images can be processed and
 * large media does not need to be stored in this git repo.
 * @param {string} src
 * @param {object} reporter
 */
const unlink = async src => {
  fs.unlink(src, err => {
    if (err) {
      throw new Error(`unlink image: ${src} -> ${dest}`)
    }
  })
}

module.exports.process = (src, reporter) => {
  if (src.indexOf(rawSrc) >= 0) {
    const fns = [toRoot, toSocialMedia, toComponent]
    let promise = Promise.resolve()

    fns.forEach(fn => {
      promise = promise.then(() => {
        reporter.verbose(`process`)
        return fn(src)
      })
    })
    promise.finally(() => unlink(src))
  }
}

module.exports.toStatic = (src, mediaType, reporter) => {
  if (
    mediaType === `image/gif` ||
    mediaType === `image/svg+xml` ||
    src.indexOf(socialMediaRootDest) > -1
  ) {
    const destPath = getStaticDirectory(mediaType, src)
    const dest = path.join(destPath, path.basename(src))

    mkdir(destPath)
    fs.copyFile(src, dest, err => {
      const message = `${mediaType}: ${src} -> ${dest}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
  }
}

const getStaticDirectory = (mediaType, src) => {
  if (mediaType === `image/gif`) return gifsDest
  if (mediaType === `img/svg+xml`) return svgsDest
  if (src.indexOf(socialMediaRootDest) > -1) return socialMediaDest
  return staticDest
}

const mkdir = path => {
  fs.existsSync(path) || fs.mkdirSync(path, { recursive: true })
}

const getDest = (src, dest) => {
  return path.join(dest, path.basename(src))
}

/**
 * Synchronize your asynchronous code using JavaScript’s async await
 * Patrick Ferreira
 * https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d
 */

//TODO
// Find out why svg is blank on build
// Use error message function
// Use Promise.all
