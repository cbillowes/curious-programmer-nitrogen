import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import Anchor from '../components/anchor'
import Panel from '../components/panel'
import { WithoutHeadingSpacer, WithHeadingSpacer } from '../components/spacer'
import { H1, H2, H3, H4 } from '../components/heading'
import '../components/styles/about.scss'

const AboutPage = () => (
  <Layout
    className="about-page"
    footer={true}
  >
    <SEO title="About">
      My name is Clarice Bouwer. I love software.
      I am a learner for life.
    </SEO>
    <WithoutHeadingSpacer />
    <section className="about">
      <aside className="picture">
        <Image src="profile.jpg" />
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
      <aside className="qualities">
        <ul>
          <li>Passionate</li>
          <li>Curious, love learning</li>
          <li>Work hard, play hard</li>
          <li>Team player</li>
          <li>Share knowledge</li>
          <li>Self-organising</li>
          <li>Creative</li>
          <li>What is this comfort zone thing?</li>
        </ul>
      </aside>
      <div className="panels">
        <Panel title="Want to hire me?">
          <p>
            <strong className="danger">I am not on the market.</strong><br />
            When I am, ask me to do a test at home or invite me to an informal interview over coffee. I am shy but I warm up and shine in time.
            I can handle realistic pressure. Working persistent long hours is not a job for me.
            I prefer remote work in Clojure, React or Gatsby.
            I use Spacemacs (Evil mode) and Visual Studio Code.
            I need a laptop, preferrably a MacBook Pro.
          </p>
          <p>
            My full profile, the technologies I use and my career path is available on <Anchor to="https://clarice.bouwer.dev">clarice.bouwer.dev</Anchor>.
          </p>
        </Panel>
        <Panel title="How I was motivated">
          <p>
            Between computer games, the Internet, the movie Hackers, the Jolly Rodger's cookbook and an Inkjet printer, I was hooked.
            Both my cousin and I were watching an Inkjet printer do it's thing.
            I was fascinated at how methodical and ingenius this device was to me.
            I asked her what she wanted to be when she grew up.
            I don't know what she said but I said "a programmer".
          </p>
          <p>
            I remember having a Spectrum.
            Apart from the most awesome Space Invaders <span role="img" aria-label="Space Invaders">👾</span>, there was a cartridge for learning how to program in BASIC.
            I enjoyed that too.
          </p>
        </Panel>
        <Panel title="I am self-taught">
          <p>
            I learned to take apart websites and put them back together again locally.
            I experimented with different mark up until I got the feel of how to make websites.
            I taught others about the HTML, CSS and JavaScript that I had learned.
            I still take things apart and learn how to put them together.
            I do read more documentation now as it's easy to miss important things just by teaching one's self.
          </p>
        </Panel>
        <Panel title="I studied stuff">
          <p>
            I attended CTI (Computer Training Institute) in Bedfordview, South Africa for the years of 2004 and 2005.
            I completed National Diplomas in Computer Science and Information Systems.
         </p>
        </Panel>
        <Panel title="My experience so far">
          <p>
            I have been working professionally since 2006.
            Now {new Date().getFullYear() - 2006} years of experience.
            I specialized in Microsoft web applications writing in C#, VB.NET and T-SQL.
          </p>
          <p>
            In 2018, I switched over to Linux &amp; Mac and started working in
            <Anchor to="https://clojure.org/">Clojure</Anchor> with a bit of
            <Anchor to="https://www.datomic.com/">Datomic</Anchor>.
          </p>
        </Panel>
        <Panel title="What keeps me ticking">
          <p>
            Focus on writing both user and developer friendly systems.
            Surrounding myself with others who know more than me.
            Blog about what I learn.
          </p>
        </Panel>
      </div>
    </section>
  </Layout>
)

export default AboutPage

//TODO: update content to be more friendly and open, especially under "hire me"
//TODO: fix contact buttons. two clarice@bouwer.dev's
