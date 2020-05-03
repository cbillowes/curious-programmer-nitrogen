const path = require(`path`)
const fs = require("fs")
const sharp = require("sharp")

const srcRaw = `src/images/raw`
const srcPosts = `src/images/posts`
const excludeGifs = `src/images/gifs`

const destRaw = `src/images/posts`
const destShare = `public/static/share`
const destBanners = `public/static/banners`
const destThumbnails = `public/static/thumbnails`
const destSvgs = `public/static/svgs`
const destGifs = `public/static/gifs`

const mkdir = (path) => {
  fs.existsSync(path) || fs.mkdirSync(path)
}

const getSharpInstance = (absolutePath, quality) => {
  const ext = path.extname(absolutePath)
  switch (ext) {
    case ".jpeg":
    case ".jpg":
      return sharp(absolutePath).jpeg({ quality })

    case ".png":
      return sharp(absolutePath).png({ quality })
  }

  return sharp(absolutePath)
}

/**
 * Slap hi-res images into the raw directory. These images are excluded from git.
 * They are optimized and copied to the srcPosts directory on build.
 * @param {string} absolutePath
 * @param {function} reporter
 */
const optimizeRawImages = (absolutePath, reporter) => {
  if (absolutePath.indexOf(srcRaw) >= 0) {
    mkdir(destRaw)
    const filename = path.basename(absolutePath)
    const destPath = path.join(destRaw, filename)
    const sharpInstance = getSharpInstance(absolutePath, 40)
    sharpInstance.toFile(destPath, (err) => {
      const message = `optimize raw image: ${absolutePath} -> ${destPath}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
        fs.unlinkSync(absolutePath)
      }
    })
  }
}

/**
 * Optimized images in the posts directory are resized and placed into a
 * directory in public/static for the use of sharing pages/posts which display
 * a thumbnail (social media sharing).
 * @param {string} absolutePath
 * @param {function} reporter
 */
const shares = (absolutePath, reporter) => {
  if (absolutePath.indexOf(srcPosts) >= 0) {
    mkdir(destShare)
    const filename = path.basename(absolutePath)
    const destPath = path.join(destShare, filename)
    const sharpInstance = getSharpInstance(absolutePath, 100)
    sharpInstance
      .resize(1200, 1200, {
        fit: sharp.fit.cover,
        position: sharp.strategy.attention,
      })
      .toFile(destPath, (err) => {
        const message = `social media image: ${absolutePath} -> ${destPath}`
        if (err) {
          reporter.error(`${message}\n${err}`)
        } else {
          reporter.verbose(message)
        }
      })
  }
}

/**
 * Banners are images that are displayed on each post to give it some flair.
 * @param {string} absolutePath
 * @param {function} reporter
 */
const banners = (absolutePath, reporter) => {
  if (absolutePath.indexOf(srcPosts) >= 0) {
    mkdir(destBanners)
    const filename = path.basename(absolutePath)
    const destPath = path.join(destBanners, filename)
    const sharpInstance = getSharpInstance(absolutePath, 100)
    sharpInstance
      .resize(1200, 300, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile(destPath, (err) => {
        const message = `banner: ${absolutePath} -> ${destPath}`
        if (err) {
          reporter.error(`${message}\n${err}`)
        } else {
          reporter.verbose(message)
        }
      })
  }
}

const thumbnails = (absolutePath, reporter) => {
  if (absolutePath.indexOf(srcPosts) >= 0) {
    mkdir(destThumbnails)
    const filename = path.basename(absolutePath)
    const destPath = path.join(destThumbnails, filename)
    const sharpInstance = getSharpInstance(absolutePath, 100)
    sharpInstance
      .resize(600, 250, {
        fit: sharp.fit.cover,
        position: sharp.strategy.attention,
      })
      .toFile(destPath, (err) => {
        const message = `thumbnail: ${absolutePath} -> ${destPath}`
        if (err) {
          reporter.error(`${message}\n${err}`)
        } else {
          reporter.verbose(message)
        }
      })
  }
}

/**
 * Scrounges directories for any svgs that should be copied to the public directory.
 * @param {string} mediaType
 * @param {string} absolutePath
 * @param {function} reporter
 */
const svgs = (mediaType, absolutePath, reporter) => {
  if (mediaType === `image/svg+xml`) {
    mkdir(destSvgs)
    const filename = path.basename(absolutePath)
    const destPath = path.join(destSvgs, filename)
    fs.copyFile(absolutePath, destPath, (err) => {
      const message = `svg: ${absolutePath} -> ${destPath}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
  }
}

/**
 * All gifs that are not animated can be placed into a single directory.
 * These gifs are copied to the respective destination directory in public.
 * @param {string} mediaType
 * @param {string} absolutePath
 * @param {function} reporter
 */
const gifs = (mediaType, absolutePath, reporter) => {
  if (mediaType === `image/gif` && absolutePath.indexOf(excludeGifs) === -1) {
    mkdir(destGifs)
    const filename = path.basename(absolutePath)
    const destPath = path.join(destGifs, filename)
    fs.copyFile(absolutePath, destPath, (err) => {
      const message = `gif: ${absolutePath} -> ${destPath}`
      if (err) {
        reporter.error(`${message}\n${err}`)
      } else {
        reporter.verbose(message)
      }
    })
  }
}

/**
 * Build time processing of images including optimization of raw files to
 * ensure a lightweight git history, resizing of images for respective cases,
 * and copying of site-wide files that should be placed in respective directories.
 */
module.exports.process = (mediaType, absolutePath, reporter) => {
  optimizeRawImages(absolutePath, reporter)
  shares(absolutePath, reporter)
  banners(absolutePath, reporter)
  thumbnails(absolutePath, reporter)
  svgs(mediaType, absolutePath, reporter)
  gifs(mediaType, absolutePath, reporter)
}
