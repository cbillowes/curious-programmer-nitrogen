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
      author: function(author) {
        if (author)
          return `by ${author}`

        return `by Clarice Bouwer`
      },
      ttr: function(ttr) {
        if (ttr)
          return `(Est. ${ttr} minute read)`

        return ``
      },
    }
  },
}