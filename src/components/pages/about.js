import React from 'react'
import Layout from '../layout'
import Image from '../image'
import Anchor from '../anchor'
import Panel from '../panel'
import { H1, H2, H3, H4 } from '../heading'
import '../../styles/about.scss'
import '../../styles/page.scss'

const AboutPage = ({ profileImage }) => (
  <Layout
    className="about-page"
    footer={true}
  >
    <section className="about">
      <aside className="picture">
        <Image data={profileImage} />
      </aside>
      <aside className="title">
        <H1>Clarice Bouwer</H1>
        <H2>Senior Software Engineer</H2>
        <H3>Cloudsure &middot; Grand Baie, Mauritius</H3>
        <H4>
          <Anchor to="mailto:clarice@bouwer.dev" className="tag">clarice@bouwer.dev</Anchor>
          <Anchor to="https://curiousprogrammer.dev" className="tag">curiousprogrammer.dev</Anchor>
          <Anchor to="https://clarice.bouwer.dev" className="tag">clarice.bouwer.dev</Anchor>
        </H4>
      </aside>
      <aside className="contact">
        <Anchor to="mailto:clarice@bouwer.dev" className="email" />
        <Anchor to="https://twitter.com/cbillowes" className="twitter" />
        <Anchor to="https://stackoverflow.com/users/849986/clarice-bouwer" className="stackoverflow" />
        <Anchor to="https://github.com/cbillowes" className="github" />
        <Anchor to="https://www.linkedin.com/in/cbouwer/" className="linked-in" />
      </aside>
      <aside className="values">
        <ul>
          <li>Listen</li>
          <li>Open &amp; honest</li>
          <li>Passionate</li>
          <li>Curious</li>
          <li>Work hard, play hard</li>
          <li>Team player</li>
          <li>Share knowledge</li>
          <li>Self-organize</li>
          <li>Creative</li>
          <li>Go beyond</li>
        </ul>
      </aside>
      <div className="panels">
        <Panel title="Do you want to hire me?">
          <p className="danger">
            Kindly note that I am <strong>not</strong> on the market at the moment.
          </p>
          <p>
            Feel free to invite me for a casual chat over a <span role="img" aria-label="Coffee emoji" title="Coffee">☕</span> or <span role="img" aria-label="Beers emoji" title="Beer">🍻</span>.
            Let's discover if the position is well suited for the both of us and if our values align.
            Give me the opportunity to more accurately showcase my skills through homework assignments.
          </p>
          <p>
            An in-depth copy of my profile is available on <Anchor to="https://clarice.bouwer.dev">clarice.bouwer.dev</Anchor>,
            an open-source Clojure project which can be found on <Anchor to="https://github.com/cbillowes/clarice.bouwer.dev">GitHub</Anchor>.
          </p>
        </Panel>
        <Panel title="What are my values?">
          <ul>
            <li>Listen to the needs of the clients, business and colleagues</li>
            <li>Stay open &amp; honest with those around me</li>
            <li>Be passionate about what I do</li>
            <li>Stay curious and continue to learn</li>
            <li>Work hard, play hard philosophy</li>
            <li>Be a team player</li>
            <li>Share my knowledge with others</li>
            <li>Self-organize to make management's task easier</li>
            <li>Stay creative in solving problems and building pretty things</li>
            <li>Go beyond my comfort zone</li>
          </ul>
        </Panel>
        <Panel title="What can you expect from me?">
          <p>
            I <span className="highlight primary">care</span> about the business, people and clients.
            I don't know everything so I am exceptionally good at <span className="highlight primary">Googling</span>.
            I don't like dangling problems so I <span className="highlight primary">figure out solutions</span>.
            I am super eager to <span className="highlight primary">learn</span> technologies, methods, and techniques that are unfamiliar to me.
            I believe commuting takes up a lot of valuable time to both the business and myself so I prefer <span className="highlight primary">remote work</span>.
            I can <span className="highlight primary">handle realistic pressure</span> and I don't work excessive long hours.
            I know that I am not a super human so I <span className="highlight primary">work well in teams</span> and learn from colleagues.
          </p>
        </Panel>
        <Panel title="What have I worked with?">
          <p>
            I am open to learning anything I am unfamiliar with and enjoy improving and mastering what I am currently acquainted with.
            I now have {new Date().getFullYear() - 2006} years of experience of software development and am thoroughly enjoying it.
          </p>
          <ul>
            <li>
              Since 2006, I have been developing web applications in .NET and Microsoft SQL Server using Microsoft Visual Studio.
            </li>
            <li>
              In 2016, I was introduced to Agile and Git.
            </li>
            <li>
              In 2018, I was introduced to <Anchor to="https://sulami.github.io/posts/why-i-like-clojure/">Clojure</Anchor>,
              ClojureScript and <Anchor to="https://www.datomic.com/">Datomic</Anchor> <span role="img" aria-label="Sparkling heart emoji" title="Absolutely love it">💖</span>
              on Linux and started using Gatsby on my blog.
            </li>
            <li>
              In 2019, I started using Spacemacs with Evil bindings on a MacBook Pro <span role="img" aria-label="Mind blown emoji" title="Mind blown">🤯</span>
            </li>
          </ul>
        </Panel>
        <Panel title="How did I start web application development?">
          <p>
            Between computer games, the birth of the web, the movie Hackers, the Jolly Rodger's cookbook and an Inkjet printer, I was hooked.
          </p>
          <p>
            Both my cousin and I were watching an Inkjet printer do it's thing.
            I was fascinated at how methodical and ingenious this device was to me.
            I asked her what she wanted to be when she grew up.
            I don't know what she said but I said "a programmer".
          </p>
          <p>
            I also remember having a Spectrum.
            Apart from the most awesome Space Invaders <span role="img" aria-label="Space Invaders emoji">👾</span>, there was a cartridge for learning how to program in BASIC.
            I enjoyed that too.
          </p>
        </Panel>
        <Panel title="How did I learn to do what I do?">
          <p>
            I learned to take apart websites and put them back together again locally.
            I experimented with different mark up until I got the feel of how to make websites.
            I taught others about the HTML, CSS and JavaScript that I had learned.
            I still take things apart and learn how to put them together.
            I do read more documentation now as it's easy to miss important things just by teaching one's self.
            I then studied Computer Science and Information Systems at CTI (Computer Training Institute) in 2004 and 2005 and passed both diplomas with distinctions. <span role="img" aria-label="Rocket emoji">🚀</span>
          </p>
        </Panel>
      </div>
    </section>
  </Layout>
)

export default AboutPage

//TODO: update content to be more friendly and open, especially under "hire me"
