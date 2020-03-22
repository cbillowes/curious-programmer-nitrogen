import React from 'react'
import { storiesOf } from '@storybook/react'
import Post from '../src/components/post'

const htmlString = `<p>Hello Galaxy, <br/>tell me <strong>HOW</strong> you're doing.</p>`

storiesOf('Components/post', module)
  .add('single', () =>
    <Post
      title="Hello World"
      slug="/blog/hello-world"
      tags={[`hello`, `world`, `greetings`]}
      date="1 April 2019"
      author="Clarice Bouwer"
      ttr={42}
    >
      <p>
        Jack Tar scurvy reef Corsair tack barque mutiny chase pinnace hempen halter.
        Plate Fleet Blimey chase guns belay Arr crow's nest hornswaggle long clothes
        hands Chain Shot. Squiffy marooned blow the man down yardarm keel lanyard bilge
        rat execution dock killick lass.
      </p>
      <p>
        Wench overhaul topgallant man-of-war strike colors hogshead keel crimp plunder reef.
      </p>
    </Post>
  )
  .add('string html', () =>
    <Post
      title="Hello Galaxy"
      slug="/blog/hello-galaxy"
      tags={[`hello`, `galaxy`, `greetings`]}
      date="1 April 2018"
      author="Clarice Bouwer"
      ttr={42}
    >
      {htmlString}
    </Post>
  )
