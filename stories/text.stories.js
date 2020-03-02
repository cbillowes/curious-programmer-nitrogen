import React from 'react'
import { storiesOf } from '@storybook/react'
import Blurb from '../src/components/blurb'
import '../src/components/layout.css'

storiesOf('Text', module)
  .add('unlimited', () =>
    <Blurb>
      <p>
        A few words from the hitchiker's guide to the galaxy.
      </p>
      <p>
        I love deadlines. I like the <strong>whooshing</strong> sound they make as they fly by.
        In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.
      </p>
      <blockquote>
        The ships hung in the sky in much the same way that bricks don't.
      </blockquote>
      Please accept just plain text my friend.
      <p>
        This must be Thursday,' said <strong>Arthur</strong> to himself, sinking low over his beer. 'I never could get the hang of Thursdays.
        I may not have gone where I intended to go, but I think I have ended up where I needed to be.
        Time is an illusion. Lunchtime doubly so.
      </p>
    </Blurb>
  )

  .add('truncated', () =>
    <Blurb
      limit={50}>
      <p>
        A few words from the hitchiker's guide to the galaxy.
      </p>
      <p>
        I love deadlines. I like the <strong>whooshing</strong> sound they make as they fly by.
        In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.
      </p>
      Please accept just plain text my friend.
      <blockquote>
        The ships hung in the sky in much the same way that bricks don't.
      </blockquote>
      <p>
        This must be Thursday,' said <strong>Arthur</strong> to himself, sinking low over his beer. 'I never could get the hang of Thursdays.
        I may not have gone where I intended to go, but I think I have ended up where I needed to be.
        Time is an illusion. Lunchtime doubly so.
      </p>
    </Blurb>
  )
  .add('plain text', () =>
    <Blurb>
      “Do. Or do not. There is no try.” – Yoda. “Somebody has to save our skins.” – Leia Organa.
      “In my experience there is no such thing as luck.” – Obi-Wan Kenobi.
      “I’ve got a bad feeling about this.” – basically everyone.
      “Your eyes can deceive you. Don’t trust them.” – Obi-Wan Kenobi
      "I find your lack of faith disturbing." – Darth Vader
    </Blurb>
  )