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

module.exports.create = (createNodeField, node, number) => {
  if (node.frontmatter.photo) {
    createNodeField({
      node,
      name: `photo`,
      value: node.frontmatter.photo,
    })

    createNodeField({
      node,
      name: `source`,
      value: node.frontmatter.creditSource,
    })

    createNodeField({
      node,
      name: `credit`,
      value: node.frontmatter.credit,
    })

    createNodeField({
      node,
      name: `link`,
      value: node.frontmatter.creditLink,
    })
    return
  }

  const thumbnail = thumbnails[number % (thumbnails.length - 1)]
  createNodeField({
    node,
    name: `photo`,
    value: thumbnail.photo,
  })

  createNodeField({
    node,
    name: `source`,
    value: thumbnail.source,
  })

  createNodeField({
    node,
    name: `credit`,
    value: thumbnail.credit,
  })

  createNodeField({
    node,
    name: `link`,
    value: thumbnail.link,
  })
  return
}
