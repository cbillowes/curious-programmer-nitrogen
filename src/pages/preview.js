import React from 'react'
import Layout from '../components/layout'

const Preview = () => (
  <>
    <Layout>
      <div className="posts">
        <section className="post preview">
          <div className="ribbon">
            <div className="backdrop">
              <div className="text">
                #400
            </div>
            </div>
          </div>
          <h1>
            <a href="https://destination.unknown">
              Lorem ipsum dolor sit amet, consectetur adipiscing
          </a>
          </h1>
          <p>Aliquam sed cursus magna. Etiam imperdiet ornare diam quis porttitor. Nam leo risus, vestibulum eu aliquet a, venenatis in neque...</p>
          <div className="metadata">
            on 22 July 2018 by <span>Clarice Bouwer</span> <span>(5 minute read)</span>
          </div>
          <div className="tags">
            <a href="/#" className="tag primary">apples</a>
            <a href="/#" className="tag primary">oranges</a>
            <a href="/#" className="tag primary">pears</a>
          </div>
        </section>
        <section className="post preview">
          <div className="ribbon">
            <div className="backdrop">
              <div className="text">
                #400
            </div>
            </div>
          </div>
          <h1>
            <a href="/#">
              Lorem ipsum dolor sit amet
          </a>
          </h1>
          <p>Etiam imperdiet ornare diam quis porttitor...</p>
          <div className="metadata">
            on 22 July 2018 by <span>Clarice Bouwer</span> <span>(5 minute read)</span>
          </div>
          <div className="tags">
            <a href="/#" className="tag primary">apples</a>
            <a href="/#" className="tag primary">oranges</a>
            <a href="/#" className="tag primary">pears</a>
          </div>
        </section>

        <section className="post preview">
          <div className="ribbon">
            <div className="backdrop">
              <div className="text">
                #400
            </div>
            </div>
          </div>
          <h1>
            <a href="/#">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </a>
          </h1>
          <p>Aliquam sed cursus magna. Etiam imperdiet ornare diam quis porttitor. Nam leo risus, vestibulum eu aliquet a, venenatis in neque...</p>
          <div className="metadata">
            on 22 July 2018 by <span>Clarice Bouwer</span> <span>(5 minute read)</span>
          </div>
          <div className="tags">
            <a href="/#" className="tag primary">apples</a>
            <a href="/#" className="tag primary">oranges</a>
            <a href="/#" className="tag primary">pears</a>
          </div>
        </section>

        <section className="post preview">
          <div className="ribbon">
            <div className="backdrop">
              <div className="text">
                #400
            </div>
            </div>
          </div>
          <h1>
            <a href="/#">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </a>
          </h1>
          <p>Aliquam sed cursus magna. Etiam imperdiet ornare diam quis porttitor. Nam leo risus, vestibulum eu aliquet a, venenatis in neque...</p>
          <div className="metadata">
            on 22 July 2018 by <span>Clarice Bouwer</span> <span>(5 minute read)</span>
          </div>
          <div className="tags">
            <a href="/#" className="tag primary">apples</a>
            <a href="/#" className="tag primary">oranges</a>
            <a href="/#" className="tag primary">pears</a>
          </div>
        </section>

        <section className="post preview">
          <div className="ribbon">
            <div className="backdrop">
              <div className="text">
                #400
            </div>
            </div>
          </div>
          <h1>
            <a href="/#">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </a>
          </h1>
          <p>Aliquam sed cursus magna. Etiam imperdiet ornare diam quis porttitor. Nam leo risus, vestibulum eu aliquet a, venenatis in neque...</p>
          <div className="metadata">
            on 22 July 2018 by <span>Clarice Bouwer</span> <span>(5 minute read)</span>
          </div>
          <div className="tags">
            <a href="/#" className="tag primary">apples</a>
            <a href="/#" className="tag primary">oranges</a>
            <a href="/#" className="tag primary">pears</a>
          </div>
        </section>
      </div>
    </Layout>
    <hr/>

  <Layout reading="true">
    <h1>I am a level one heading. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum, orci venenatis dictum pulvinar, erat lorem dapibus velit, vel finibus erat erat ac nunc. Vivamus vel metus ex. Sed consequat tellus ac felis consectetur dictum. Nullam sed iaculis urna. Quisque in euismod lectus. Vestibulum et est eget odio pretium scelerisque. Integer metus velit, dictum at nulla in, tempus mollis lectus.</p>
    <p>
      I am an <a href="https://destination.unknown" className="free">default</a> anchor.
      I am an <a href="/preview" className="free">default visited</a> anchor.
    </p>
    <p>
      I am a <a href="https://destination.unknown">normal</a> anchor.
      I am a <a href="/preview">visited normal</a> anchor.
    </p>
    <p>
      I am a <a href="/#" className="tag primary">primary</a> tag.
      I am a <a href="/#" className="tag secondary">secondary</a> tag.
      I am a <a href="/#" className="tag tertiary">tertiary</a> tag.
      I am a <a href="/#" className="tag disabled">disabled</a> tag.
    </p>

    <blockquote>
      Aliquam sed cursus magna. Etiam imperdiet ornare diam quis porttitor. Etiam volutpat maximus sagittis. Nam leo risus, vestibulum eu aliquet a, venenatis in neque. Mauris iaculis volutpat dui, eu euismod justo laoreet nec. Nulla nec nibh lacinia, consectetur urna non, vulputate turpis.
    </blockquote>

    <ul>
      <li>Phasellus elementum, orci venenatis dictum pulvinar, erat lorem dapibus velit, vel finibus erat erat ac nunc. </li>
      <li>Vivamus vel metus ex. </li>
      <li>Sed consequat tellus ac felis consectetur dictum.</li>
    </ul>

    <ol>
      <li>Phasellus elementum, orci venenatis dictum pulvinar, erat lorem dapibus velit, vel finibus erat erat ac nunc. </li>
      <li>Vivamus vel metus ex. </li>
      <li>Sed consequat tellus ac felis consectetur dictum.</li>
    </ol>

    <h2>I am a level two heading. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <p>Aliquam sed cursus magna. Etiam imperdiet ornare diam quis porttitor. Etiam volutpat maximus sagittis. Nam leo risus, vestibulum eu aliquet a, venenatis in neque. Mauris iaculis volutpat dui, eu euismod justo laoreet nec. Nulla nec nibh lacinia, consectetur urna non, vulputate turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et sapien suscipit lectus blandit hendrerit eu sed augue.</p>

    <h3>I am a level three heading. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
    <p>Phasellus tincidunt orci at congue dignissim. Donec pharetra, nisi at facilisis placerat, turpis metus laoreet lacus, sed varius odio turpis nec justo. Nam nibh erat, tincidunt quis est a, facilisis vulputate magna. Praesent cursus tortor tortor, a sagittis purus finibus eget. Aliquam lacinia euismod cursus. Vivamus aliquet lorem vel ligula finibus dictum id quis purus. Etiam id maximus lacus. Nam a leo vel risus pulvinar dignissim nec at nisl. Etiam vestibulum elit id lorem congue efficitur. Vivamus ut risus tortor. Pellentesque at gravida velit, nec blandit nisl. Sed sit amet elementum turpis. Phasellus elementum, nisi quis gravida maximus, velit orci mattis nisl, nec mattis mauris ligula eu ante. Nunc ut sagittis sapien, eget elementum nunc. Nulla scelerisque malesuada tempus. Integer justo dolor, efficitur vel lectus ornare, porttitor fermentum augue.</p>

    <h4>I am a level four heading. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    <p>Nam auctor euismod quam nec lacinia. Sed sed nisi vel risus vestibulum aliquet nec eget ante. Morbi lacinia ante ut sem congue suscipit. Integer tempor orci vitae lectus porttitor, quis consectetur magna fringilla. Vivamus eu lacinia metus. Donec condimentum porttitor sem, id viverra ligula vestibulum vitae. Integer non nisl eu lacus euismod bibendum. Praesent lacinia sit amet justo in placerat.</p>
  </Layout>
  </>
)

export default Preview