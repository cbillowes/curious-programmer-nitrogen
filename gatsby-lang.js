module.exports = {
  locale: `en`,
  posts: {
    author: `Clarice Bouwer`,
    none: `There are no posts available.`,
    metadata: {
      date: {
        prefix: `posted on`,
        format: `dddd, D MMMM YYYY`,
      },
      author: function (author) {
        return `by ${author}`
      },
      ttr: function (ttr) {
        if (ttr)
          return `(Est. ${ttr} minute read)`

        return ``
      },
    }
  },
}
