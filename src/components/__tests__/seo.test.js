import React from 'react'
import { PureSEO as SEO } from '../seo'
import { getWrapper } from './_helpers'

describe(`SEO`, () => {
  it(`should render site title only`, () => {
    const component = (
      <SEO
        data={{
          siteMetadata: {
            title: `Curious Programmer`,
          }
        }}
      />
    )
    const title = `Curious Programmer`
    const wrapper = getWrapper(component)
    expect(wrapper.find(`title`).text()).toBe(title)
    expect(wrapper.find(`meta[name="title"]`).props().content).toBe(title)
    expect(wrapper.find(`meta[property="og:title"]`).props().content).toBe(title)
    expect(wrapper.find(`meta[property="twitter:title"]`).props().content).toBe(title)
  })

  it(`should render the page title with the site title appended`, () => {
    const component = (
      <SEO
        title="Don't Panic."
        data={{
          siteMetadata: {
            title: `Curious Programmer`,
          }
        }}
      />
    )
    const title = `Don't Panic. | Curious Programmer`
    const wrapper = getWrapper(component)
    expect(wrapper.find(`title`).text()).toBe(title)
    expect(wrapper.find(`meta[name="title"]`).props().content).toBe(title)
    expect(wrapper.find(`meta[property="og:title"]`).props().content).toBe(title)
    expect(wrapper.find(`meta[property="twitter:title"]`).props().content).toBe(title)
  })

  it(`should render the site description only`, () => {
    const component = (
      <SEO
        data={{
          siteMetadata: {
            description: `One early morning, Arthur's friend, who's actually an alien, informs him of Earth's impending doom and whisks him away in a spaceship. While Arthur deals with his woes, he also has a great adventure.`,
          }
        }}
      />
    )
    const description = `One early morning, Arthur's friend, who's actually an alien, informs him of Earth's impending doom and whisks him away in a spaceship. While Arthur deals with his woes, he also has a great adventure.`
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[name="description"]`).props().content).toBe(description)
    expect(wrapper.find(`meta[property="og:description"]`).props().content).toBe(description)
    expect(wrapper.find(`meta[property="twitter:description"]`).props().content).toBe(description)
  })

  it(`should render the page description only`, () => {
    const component = (
      <SEO
        description="One early morning, Arthur's friend, who's actually an alien, informs him of Earth's impending doom and whisks him away in a spaceship. While Arthur deals with his woes, he also has a great adventure."
        data={{ siteMetadata: {} }}
      />
    )
    const description = `One early morning, Arthur's friend, who's actually an alien, informs him of Earth's impending doom and whisks him away in a spaceship. While Arthur deals with his woes, he also has a great adventure.`
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[name="description"]`).props().content).toBe(description)
    expect(wrapper.find(`meta[property="og:description"]`).props().content).toBe(description)
    expect(wrapper.find(`meta[property="twitter:description"]`).props().content).toBe(description)
  })

  it(`should disable crawling`, () => {
    const component = (
      <SEO
        crawl={false}
        data={{ siteMetadata: {} }}
      />
    )
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[name="robots"]`).props().content).toBe("noindex")
  })

  it(`should enable crawling`, () => {
    const component = (
      <SEO
        crawl={true}
        data={{ siteMetadata: {} }}
      />
    )
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[name="robots"]`).props().content).toBe("index")
  })

  it(`should render the site author`, () => {
    const component = (
      <SEO
        data={{
          siteMetadata: {
            author: `Clarice Bouwer`,
          }
        }}
      />
    )
    const author = `Clarice Bouwer`
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[property="twitter:author"]`).props().content).toBe(author)
  })

  it(`should render static metadata`, () => {
    const component = (
      <SEO
        data={{ siteMetadata: {} }}
      />
    )
    const wrapper = getWrapper(component)
    expect(wrapper.find(`meta[property="og:type"]`).props().content).toBe(`website`)
    expect(wrapper.find(`meta[property="twitter:card"]`).props().content).toBe(`summary`)
  })
})
