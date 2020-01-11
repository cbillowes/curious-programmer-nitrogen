import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import Anchor from '../components/anchor'
import Contact from '../components/contact'
import { H1, H2, H3, H4 } from '../components/heading'
import Constants from '../../gatsby-data'

const colors = Constants.theme.colors

const List = styled.ul`
  background-color: ${colors.darkest};
  border-radius: .75rem;
  padding: .75rem .25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.25rem; 

  li {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`

const Profile = styled.section`
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  
  h1, h2, h3, h4 {
    margin: 0;
  }

  h3, h4 {
    font-weight: normal;
  }
`

const ProfilePic = styled.span`
  width: 200px;
  height: 200px;
  display: inline-block;
  z-index: 1;

  img {
    border-radius: 50%;
    z-index: 1;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About">
      I don't know what to say hey, I love software.
    </SEO>
    <div data-page="about-page">
      <Profile data-component="about-profile">
        <ProfilePic>
          <Image src="profile.jpg" />
        </ProfilePic>
        <H1>Clarice Bouwer</H1>
        <H2>Senior Software Engineer</H2>
        <H3>Cloudsure &middot; Grand Baie, Mauritius</H3>
        <H4>
          <Anchor to="mailto:clarice@bouwer.dev">clarice@bouwer.dev</Anchor> &middot; 
          <Anchor to="https://curiousprogrammer.dev">curiousprogrammer.dev</Anchor> &middot; 
          <Anchor to="https://clarice.bouwer.dev">clarice.bouwer.dev</Anchor>
        </H4>
        <Contact />
        <div>
          <List>
            <li>Curious and love learning</li>
            <li>Passionate</li>
            <li>Work hard, play hard</li>
            <li>Team player</li>
            <li>Enjoy sharing knowledge</li>
            <li>Self managing</li>
            <li>Creative</li>
            <li>Push beyond comform-zone</li>
          </List>
          <p>
            I am wildly passionate and curious about software development.
            I have been since my childhood where I played computer games which required programming a sequence 
            of steps to complete a task.
            That's where I discovered BASIC.
          </p>
          <p>
            That passion blossomed into becoming my high school's web master in 2000.
            I find the term to be gender neutral.
            To me, the term master defines my super abilities to get something done.
            I taught myself HTML by viewing the source of websites. 
            I found it logical, simple and exciting.
            I taught others what I kept learning.
          </p>
          <p>
            I studied at CTI (Computer Training Institute) in 2004 and 2005. 
            I completed National Diplomas in Computer Science and Information Systems.
            I was too eager to start applying my skills in the workplace that I never completed my degree.
          </p>
          <p>
            I have been working professionally since 2006. 
            That gives me {new Date().getFullYear() - 2006}'s experience primarily in the web space.
            I was a Microsoft and web fanatic specializing in C#, VB.NET, T-SQL, HTML, CSS and JavaScript.
            Then I was introduced to the world of Linux and Mac and my <strong>world changed when I learned Clojure</strong>.
          </p>
          <p>
            I enjoy blogging as a form of sharing what I learn. I strive to write developer and user-friendly systems.
            I relish in learn and teaching myself new things.
            I enjoy solving problems.
          </p>
          <p>
            I am shy in the beginning, then I shine. 
            I enjoy informal interviews over coffee and I prefer at-home assignments to showcase my technical skills. 
          </p>
        </div>
        <p>
          My full profile, the technologies I use and my career path is available on <Anchor to="https://clarice.bouwer.dev">clarice.bouwer.dev</Anchor>.
        </p>
      </Profile>
    </div>
  </Layout>
)

export default AboutPage