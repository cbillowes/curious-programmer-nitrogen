import React from 'react'
import SEO from '../seo'
import { getContent } from '../blurb'
import { getWrapper } from './_helpers'

const assertTitles = (component, title) => {
  const wrapper = getWrapper(component)
  expect(wrapper.find(`title`).text()).toBe(title)
  expect(wrapper.find(`meta[name="title"]`).props().content).toBe(title)
  expect(wrapper.find(`meta[property="og:title"]`).props().content).toBe(title)
  expect(wrapper.find(`meta[property="twitter:title"]`).props().content).toBe(title)
}

const assertDescriptions = (component, description) => {
  const wrapper = getWrapper(component)
  expect(wrapper.find(`meta[name="description"]`).props().content).toBe(description)
  expect(wrapper.find(`meta[property="og:description"]`).props().content).toBe(description)
  expect(wrapper.find(`meta[property="twitter:description"]`).props().content).toBe(description)
}

describe(`SEO`, () => {
  describe(`title`, () => {
    it(`for page`, () => {
      const component = (
        <SEO
          title="Don't panic."
        />
      )
      const title = "Don't panic."
      assertTitles(component, title)
    })

    it(`for site`, () => {
      const component = (
        <SEO
          siteMetadata={{
            title: `Hitchhikers Guide to the Galaxy`
          }}
        />
      )
      const title = "Hitchhikers Guide to the Galaxy"
      assertTitles(component, title)
    })

    it(`for page & site`, () => {
      const component = (
        <SEO
          title="Don't panic."
          siteMetadata={{
            title: `Hitchhikers Guide to the Galaxy`
          }}
        />
      )
      const title = "Don't panic. | Hitchhikers Guide to the Galaxy"
      assertTitles(component, title)
    })
  })

  describe(`description`, () => {
    it(`for page`, () => {
      const description = "It must be Thursday."
      const component = (
        <SEO>
          {description}
        </SEO>
      )
      assertDescriptions(component, description)
    })

    it(`for page (limited to 25 words)`, () => {
      const description = `
        Arthur Dent (Martin Freeman) is trying to prevent his house from being bulldozed
        when his friend Ford Prefect (Mos Def) whisks him into outer space. It turns out
        Ford is an alien who has just saved Arthur from Earth's total annihilation.
        Ford introduces Arthur to his myriad friends, including many-headed President
        Zaphod Beeblebrox (Sam Rockwell) and sexy refugee Trillian (Zooey Deschanel).
        Arthur makes his way across the stars while seeking the meaning of life, or something close to it.
      `
      const component = (
        <SEO>
          {description}
        </SEO>
      )
      assertDescriptions(component, getContent(30, description))
    })

    it(`for site`, () => {
      const description = "A trilogy in four parts."
      const component = (
        <SEO
          siteMetadata={{
            description: `${description}`,
          }}
        />
      )
      assertDescriptions(component, description)
    })
  })

  describe(`crawling`, () => {
    it(`should disable`, () => {
      const component = (
        <SEO
          crawl={false}
        />
      )
      const wrapper = getWrapper(component)
      expect(wrapper.find(`meta[name="robots"]`).props().content).toBe("noindex")
    })

    it(`should enable`, () => {
      const component = (
        <SEO
          crawl={true}
        />
      )
      const wrapper = getWrapper(component)
      expect(wrapper.find(`meta[name="robots"]`).props().content).toBe("index")
    })
  })

  it(`should set the author`, () => {
    const author = `Douglas Adams`
    const twitter = `@dadams`
    const component = (
      <SEO
        siteMetadata={{
          author,
          twitter,
        }}
      />
    )
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[property="twitter:author"]`).props().content).toBe(twitter)
  })

  it(`should set the image`, () => {
    const image = `/static/test.jpg`
    const component = (
      <SEO
        siteMetadata={{
          image,
        }}
      />
    )
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[property="og:image"]`).props().content).toBe(image)
    expect(wrapper.find(`meta[property="twitter:image"]`).props().content).toBe(image)
  })

  it(`should render static metadata`, () => {
    const component = (
      <SEO
        title="Don't Panic."
        data={{
          siteMetadata:
          {
            description: `A curious place for a curious mind.`
          }
        }}
      />
    )
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[property="og:type"]`).props().content).toBe(`website`)
    expect(wrapper.find(`meta[property="twitter:card"]`).props().content).toBe(`summary`)
  })
})
