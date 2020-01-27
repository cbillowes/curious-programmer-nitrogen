import React from 'react'
import { storiesOf } from '@storybook/react'
import PostNavigationTiny from '../src/components/postNavigationTiny'
import Layout from '../src/components/layout'
import '../src/components/layout.css'

const starwars = {
  title: `In a galaxy far away, quotes from Star Wars`,
  author: `George Lucas`,
  excerpt: 
  `
    “Do. Or do not. There is no try.” – Yoda. “Somebody has to save our skins.” – Leia Organa.
    “In my experience there is no such thing as luck.” – Obi-Wan Kenobi.
    “I’ve got a bad feeling about this.” – basically everyone.
    “Your eyes can deceive you. Don’t trust them.” – Obi-Wan Kenobi
    "I find your lack of faith disturbing." – Darth Vader
  `,
}

const hitchikersGuideToTheGalaxy = {
  title: `The ultimate hitchiker's guide to the galaxy`,
  author: `Douglas Adams`,
  excerpt: 
  `
    I love deadlines. I like the whooshing sound they make as they fly by.
    In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.
    This must be Thursday,' said Arthur to himself, sinking low over his beer. 'I never could get the hang of Thursdays.
    I may not have gone where I intended to go, but I think I have ended up where I needed to be.
    Time is an illusion. Lunchtime doubly so.
    Flying is learning how to throw yourself at the ground and miss.
    A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.
    Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?
    Anyone who is capable of getting themselves made President should on no account be allowed to do the job.
    The ships hung in the sky in much the same way that bricks don't.
  `,
}

storiesOf('Navigation (Tiny)', module)
  .add('layout', () => 
    <Layout>
      <PostNavigationTiny
        previous={{
          title: starwars.title,
          slug: `/`,
          excerpt: starwars.excerpt,
          author: starwars.author,
          date: `20 October 2019`,
          ttr: `1`,
          tags: `star wars,vader,yoda`,
        }}
        next={{
          title: hitchikersGuideToTheGalaxy.title,
          slug: `/`,
          excerpt: hitchikersGuideToTheGalaxy.excerpt,
          author: hitchikersGuideToTheGalaxy.author,
          date: `1 April 2019`,
          ttr: `3`,
          tags: `hitchickers,beer,towel`,
        }}
      />
    </Layout>
  )
  .add('plain', () => 
    <>
      <PostNavigationTiny
        previous={{
          title: starwars.title,
          slug: `/`,
          excerpt: starwars.excerpt,
          author: starwars.author,
          date: `20 October 2019`,
          ttr: `1`,
          tags: `star wars,vader,yoda`,
        }}
        next={{
          title: hitchikersGuideToTheGalaxy.title,
          slug: `/`,
          excerpt: hitchikersGuideToTheGalaxy.excerpt,
          author: hitchikersGuideToTheGalaxy.author,
          date: `1 April 2019`,
          ttr: `3`,
          tags: `hitchickers,beer,towel`,
        }}
      />
    </>
  )
