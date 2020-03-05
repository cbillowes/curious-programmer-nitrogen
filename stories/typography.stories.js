import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, H3, H4 } from '../src/components/heading'
import Page from './_helpers'

storiesOf('Typography', module)
  .add('paragraph', () =>
    <Page className="page">
      <p>Quisque aliquet, felis in volutpat porta, lacus quam ultricies mauris, non mattis mi turpis ut mauris. Praesent ut massa purus. Curabitur non odio non dui maximus sodales. Curabitur pulvinar eget nulla eget hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vulputate tristique purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis orci varius, aliquam enim sit amet, ornare mi. Vivamus sed vestibulum lectus. Etiam ultricies quam lectus, eget eleifend neque tincidunt nec. Aliquam laoreet molestie sem, et maximus felis auctor nec. Integer mollis eleifend quam, et ultrices metus tempus non. Morbi nibh metus, accumsan in tortor eu, gravida condimentum urna.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida massa ligula, non ullamcorper ex rutrum gravida. Cras efficitur dolor diam, ut vestibulum enim efficitur sed. Aliquam accumsan dapibus massa, mattis pharetra turpis. Quisque finibus sem non felis dictum fringilla. Vestibulum imperdiet, nulla quis iaculis ultrices, est purus hendrerit dui, vel eleifend lorem quam non libero. Suspendisse eu erat vel mi pharetra sodales. Proin ut dictum elit, sit amet scelerisque odio. Fusce ornare dictum tortor ac auctor. Integer posuere nulla eget magna imperdiet volutpat. Phasellus elit augue, consequat eu tellus non, ornare gravida elit. Donec at eros eleifend, vulputate tortor et, efficitur est.</p>
      <p>Duis a arcu ac felis elementum iaculis. Nulla nunc ante, ultrices ullamcorper mauris non, dictum dictum velit. Sed eu tincidunt augue. Mauris eu sagittis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis bibendum laoreet finibus. Nunc tincidunt felis sed tincidunt ullamcorper. Phasellus faucibus turpis pulvinar turpis imperdiet congue. Cras et mi leo. Vivamus a sapien vitae augue mattis consequat non at mi. Aenean nec imperdiet dolor. Cras pellentesque diam et lobortis iaculis. Ut dapibus rhoncus euismod.</p>
    </Page>
  )
  .add('strong', () =>
    <Page className="page">
      <p>Quisque <strong>saliquet</strong>. Ut dapibus rhoncus euismod.</p>
    </Page>
  )
  .add('emphasis', () =>
    <Page className="page">
      <p>Quisque <em>saliquet</em>. Ut dapibus rhoncus euismod.</p>
    </Page>
  )
  .add('horizontal rule', () =>
    <Page className="page">
      <hr />
    </Page>
  )
