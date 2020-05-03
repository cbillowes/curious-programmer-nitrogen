import React from "react"
import Layout from "../layout"
import Image from "../image"
import Anchor from "../anchor"
import Panel from "../panel"
import { H1, H2, H3, H4 } from "../heading"
import "../../styles/about.scss"
import "../../styles/page.scss"

const AboutPage = ({ profileImage }) => (
  <Layout className="about-page" footer={true}>
    <section className="about">
      <aside className="picture">
        <Image data={profileImage} />
      </aside>
      <aside className="title">
        <H1>Clarice Bouwer</H1>
        <H2>Senior Software Engineer</H2>
        <H3>Cloudsure &middot; Grand Baie, Mauritius</H3>
        <H4>
          <Anchor to="mailto:clarice@bouwer.dev" className="tag">
            clarice@bouwer.dev
          </Anchor>
          <Anchor to="https://curiousprogrammer.dev" className="tag">
            curiousprogrammer.dev
          </Anchor>
          <Anchor to="https://clarice.bouwer.dev" className="tag">
            clarice.bouwer.dev
          </Anchor>
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
          <li>Open &amp; honest</li>
          <li>Passionate</li>
          <li>Creative</li>
          <li>Curious</li>
          <li>Work hard, play hard</li>
        </ul>
      </aside>
      <div className="panels">
        <Panel title="Technical skills">
          <p>
            Check out my profile at {" "}
            <Anchor to="https://clarice.bouwer.dev">clarice.bouwer.dev</Anchor>
            It is a ClojureScript project which can be found on{" "}
            <Anchor to="https://github.com/cbillowes/clarice.bouwer.dev">GitHub</Anchor>
            . You can check out my other
            <Anchor to="https://github.com/cbillowes/">repositories</Anchor> too if you so wish.
          </p>
        </Panel>
        <Panel title="Core values">
          <p>
            I take pride in my work and am continuously learning how to write better software.
            I strive to meet these core values.
          </p>
          <ol>
            <li>
              <strong className="tag">Good hygiene:</strong>
              Write good, happy, healthy, clean code.
              Let it speak for itself and make developers happy because they can understand it and easily maintain it.
              Domain-Driven Design and SOLID principles are good coding principles to abide by.
            </li>
            <li>
              <strong className="tag">Fast feedback:</strong>
              Get chop-chop feedback when things change. Did it break? Did it work?
              Things like testing, pair programming, continuous integration and analytics of all kinds offer assorted ways of getting fast feedback.
            </li>
            <li>
              <strong className="tag">Automation:</strong>
              Why do and do and do and do and do and do, when it can just get done?
              Automate repetitive, clunky, manual tasks to avoid inconsistencies, save time and to keep people sane.
              Automated tests, continuous deployments, scripting stuff, utility applications are examples of such things.
            </li>
            <li>
              <strong className="tag">Simplicity:</strong>
              Design for the future and develop for the now. Build the system to be robust, extendable, solid and easy to maintain.
              Develop only the necessary features and complexity that are required now. Can you say MVP?
            </li>
            <li>
              <strong className="tag">Continuity:</strong>
              Be a curious sponge. Learn by reading, watching videos, through others, doing!
            </li>
          </ol>
        </Panel>
        <Panel title="Inspiration">
          <p>
            Between computer games, the birth of the web, the movie Hackers, the
            Jolly Rodger's cookbook and an Inkjet printer, I was hooked.
          </p>
          <p>
            Both my cousin and I were watching an Inkjet printer do it's thing.
            I was fascinated at how methodical and ingenious this device was to
            me. I asked her what she wanted to be when she grew up. I don't know
            what she said but I said "a programmer".
          </p>
          <p>
            I also remember having a Spectrum. Apart from the most awesome Space
            Invaders{" "}
            <span role="img" aria-label="Space Invaders emoji">
              👾
            </span>
            , there was a cartridge for learning how to program in BASIC. I
            enjoyed that too.
          </p>
        </Panel>
        <Panel title="Aspiration">
          <p>
            I learned to take apart websites and put them back together again
            locally. I experimented with different mark up until I got the feel
            of how to make websites. I taught others about the HTML, CSS and
            JavaScript that I had learned. I still take things apart and learn
            how to put them together. I do read more documentation now as it's
            easy to miss important things just by teaching one's self. I then
            studied Computer Science and Information Systems at CTI (Computer
            Training Institute) in 2004 and 2005 and passed both diplomas with
            distinctions.{" "}
            <span role="img" aria-label="Rocket emoji">
              🚀
            </span>
          </p>
        </Panel>
      </div>
    </section>
  </Layout>
)

export default AboutPage
