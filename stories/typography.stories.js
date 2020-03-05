import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, H3, H4 } from '../src/components/heading'

storiesOf('Typography', module)
  .add('h1', () => <H1>The quick brown fox jumps over the lazy dog</H1>)
  .add('h2', () => <H2>The quick brown fox jumps over the lazy dog</H2>)
  .add('h3', () => <H3>The quick brown fox jumps over the lazy dog</H3>)
  .add('h4', () => <H4>The quick brown fox jumps over the lazy dog</H4>)
  .add('paragraph', () =>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida massa ligula, non ullamcorper ex rutrum gravida. Cras efficitur dolor diam, ut vestibulum enim efficitur sed. Aliquam accumsan dapibus massa, mattis pharetra turpis. Quisque finibus sem non felis dictum fringilla. Vestibulum imperdiet, nulla quis iaculis ultrices, est purus hendrerit dui, vel eleifend lorem quam non libero. Suspendisse eu erat vel mi pharetra sodales. Proin ut dictum elit, sit amet scelerisque odio. Fusce ornare dictum tortor ac auctor. Integer posuere nulla eget magna imperdiet volutpat. Phasellus elit augue, consequat eu tellus non, ornare gravida elit. Donec at eros eleifend, vulputate tortor et, efficitur est.</p>
      <p>Duis a arcu ac felis elementum iaculis. Nulla nunc ante, ultrices ullamcorper mauris non, dictum dictum velit. Sed eu tincidunt augue. Mauris eu sagittis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis bibendum laoreet finibus. Nunc tincidunt felis sed tincidunt ullamcorper. Phasellus faucibus turpis pulvinar turpis imperdiet congue. Cras et mi leo. Vivamus a sapien vitae augue mattis consequat non at mi. Aenean nec imperdiet dolor. Cras pellentesque diam et lobortis iaculis. Ut dapibus rhoncus euismod.</p>
      <p>Nam id consequat elit. Quisque aliquet, felis in volutpat porta, lacus quam ultricies mauris, non mattis mi turpis ut mauris. Praesent ut massa purus. Curabitur non odio non dui maximus sodales. Curabitur pulvinar eget nulla eget hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vulputate tristique purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis orci varius, aliquam enim sit amet, ornare mi. Vivamus sed vestibulum lectus. Etiam ultricies quam lectus, eget eleifend neque tincidunt nec. Aliquam laoreet molestie sem, et maximus felis auctor nec. Integer mollis eleifend quam, et ultrices metus tempus non. Morbi nibh metus, accumsan in tortor eu, gravida condimentum urna.</p>
      <p>Mauris condimentum ipsum id varius rutrum. Phasellus eget mauris lectus. Ut arcu erat, lobortis a tempor quis, volutpat ut ex. Phasellus vulputate mi tristique tortor laoreet ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sollicitudin eros. Nunc condimentum, justo a ultrices sollicitudin, odio odio porta elit, sed semper urna ex sed nisi.</p>
      <p>Nam volutpat purus nec vehicula aliquam. In vestibulum lectus at libero volutpat aliquam. Ut non quam ut mi ornare vehicula ac sed libero. Nam mauris quam, ornare ut ultrices eu, iaculis ac massa. Nam erat dolor, elementum id justo eget, eleifend feugiat sem. Fusce euismod tellus eu orci dignissim, ac sagittis nunc vehicula. Cras ac dui lobortis, placerat libero at, egestas arcu. Ut sed enim felis. Praesent quis molestie sem. Praesent egestas libero eget elit interdum, eget pulvinar dolor aliquam. Sed sodales augue in magna gravida, posuere sodales sem dictum.</p>
    </div>
  )
  .add('unordered list', () =>
    <ul>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Duis a arcu ac felis elementum iaculis.</li>
      <li>Nam id consequat elit</li>
      <li>Mauris condimentum ipsum id varius rutrum</li>
      <li>Nam volutpat purus nec vehicula aliquam</li>
    </ul>
  )
  .add('ordered list', () =>
    <ol>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Duis a arcu ac felis elementum iaculis.</li>
      <li>Nam id consequat elit</li>
      <li>Mauris condimentum ipsum id varius rutrum</li>
      <li>Nam volutpat purus nec vehicula aliquam</li>
    </ol>
  )
  .add('blockquote', () =>
    <blockquote>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida massa ligula, non ullamcorper ex rutrum gravida.
    </blockquote>
  )
  .add('code', () =>
    <code>
      (let [greeting "hello"
            name "Clarice"]
            (println (str greeting " " name)))
    </code>
  )
