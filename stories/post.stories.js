import React from 'react'
import { storiesOf } from '@storybook/react'
import Post from '../src/components/post'
import PostPage from '../src/components/pages/post'

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

const post = {
  "html": "",
  "excerpt": "",
  "timeToRead": 1,
  "fields": {
    "number": 102,
    "slug": "/blog/advanced-git-commands",
    "date": "2019-09-11 02:00:00 +0200"
  },
  "frontmatter": {
    "title": "Advanced Git commands",
    "tags": [
      "Technical",
      "Commands",
      "Git",
      "Advanced"
    ],
    "author": "Clarice Bouwer",
  }
}

let html = (
  <div>
    <p>
      🎉 Let's get <a href="/#">started with</a> some hitchhiker's Guide to the Galaxy quotes, shall we!
    </p>

    <h2>Why, what did she tell you? 🙋</h2>
    <blockquote>
      I don't know, I didn't listen.
    </blockquote>
    <p>
      You know, it's at times like this, when I'm trapped in a Vogon airlock with a man from Betelgeuse,
      and about to die of <code>asphyxiation</code> in deep space that I really wish I'd listened to what my
      mother told me when I was young. 😖
    </p>
    <pre className="language-js">
      <code>
        console.log('click here to copy 💾 this script');
      </code>
    </pre>

    <h2>🚀 But the plans were on display...</h2>
    <blockquote>
      “But the plans were on display...”
      “On display? I eventually had to go down to the cellar to find them.”
      “That’s the display department.”
      “With a flashlight.”
      “Ah, well, the lights had probably gone.”
      “So had the stairs.”
      “But look, you found the notice, didn’t you?”
      “Yes,” said Arthur, “yes I did. It was on display in the bottom of a locked
      filing cabinet stuck in a disused lavatory with a sign on the door saying
      ‘Beware of the Leopard.”
      Find more quotes at <a href="https://www.goodreads.com/quotes/tag/arthur-dent">GoodReads.com</a>.
    </blockquote>

    <h3>Ford! 💥</h3>
    <blockquote>
      “Ford!" he said,
      <blockquote>
        "there's an infinite number of monkeys outside who want to talk to us about
        this script for Hamlet they've worked out.”
      </blockquote>
      ...
    </blockquote>
    <ul>
      <li>
        It comes from a very ancient democracy, you see...
      </li>
      <li>
        You mean, it comes from a world of lizards?
      </li>
      <li>
        "No," said Ford, who by this time was a little more rational and coherent than he had
        been, having finally had the coffee forced down him, "nothing so simple.
        Nothing anything like so straightforward. On its world, the people are people.
        The leaders are lizards. The people hate the lizards and the lizards rule the people."
        "Odd," said Arthur, "I thought you said it was a democracy."
        "I did," said Ford. "It is."
      </li>
      <li>
        "So," said Arthur, hoping he wasn't sounding ridiculously obtuse, "why don't people get rid of the lizards?"
      </li>
    </ul>
    <p>
      <strong>Intermission! ✋</strong> An <a href="https://en.wikipedia.org/wiki/Intermission">intermission</a> is where
      characters are deemed to continue acting during the interval
      from one act to another." However, intermissions are more than just <em>dramatic pauses</em> that
      are parts of the shape of a <em>dramatic structure</em>.
    </p>
    <ol>
      <li>
        "It honestly doesn't occur to them," said Ford. "They've all got the vote, so they all pretty much
        assume that the government they've voted in more or less approximates to the government they want."
      </li>
      <li>
        "You mean they actually vote for the lizards?"
        "Oh yes," said Ford with a shrug, "of course."
        "But," said Arthur, going for the big one again, "why?"
      </li>
      <li>
        "Because if they didn't vote for a lizard," said Ford, "the wrong lizard might get in. Got any gin?"
        "What?"
        "I said," said Ford, with an increasing air of urgency creeping into his voice, "have you got any gin?"
        "I'll look. Tell me about the lizards."
        Ford shrugged again.
      </li>
      <li>
        "Some people say that the lizards are the best thing that ever happened to them," he said.
        "They're completely wrong of course, completely and utterly wrong, but someone's got to say it."
        "But that's terrible," said Arthur.
      </li>
      <li>
        "Listen, bud," said Ford, "if I had one Altairian dollar for every time I heard one bit of the
        Universe look at another bit of the Universe and say 'That's terrible' I wouldn't be sitting here like
        a lemon looking for a gin.”
      </li>
    </ol>

    <h4>Markdown 🖥️ components</h4>
    <p><strong>🎬 Video.</strong></p>
    <div><iframe src="https://www.youtube.com/embed/2Xc9gXyf2G4" width="800" height="400"></iframe></div>
    <hr />

    <p><strong>📝 Code: Inline.</strong></p>
    <code className="language-bash">
      sudo npm install -g gatsby-cli # Update the `npm` CLI client
    </code>
    <br />
    <code className="language-clojure">
      (def hello "world")
    </code>
    <br />

    <p><strong>📓Code: Block.</strong></p>
    <pre className="language-bash">
      <code>
        sudo npm install -g gatsby-cli # Update the `npm` CLI client
      </code>
    </pre>
    <br />
    <pre className="language-clojure">
      <code>
        (defn print-something
          []
          (let [something '("do" " " "not" " " "panic!")]
            (println ((apply str something))))
      </code>
    </pre>
    <hr />

    <p><strong>📖 Gist.</strong></p>
    <p>See an example in this <a href="https://curiousprogrammer.dev/blog/setting-up-my-environment-in-fedora" target="_blank">post</a>.</p>
    <hr />

    <p><strong>💖 Emoji.</strong></p>
    <ul>
      <li>
        <a href="https://www.webfx.com/tools/emoji-cheat-sheet/">
          https://www.webfx.com/tools/emoji-cheat-sheet/
        </a>
      </li>
      <li>
        <a href="https://emojipedia.org/" target="_blank">
          https://emojipedia.org/
        </a>
      </li>
    </ul>
    <div>
      <span>🎉 = tada </span>
      <span>😄 = smile </span>
      <span>😆 = laughing </span>
      <span>😊 = blush </span>
      <span>😃 = smiley </span>
      <span>😏 = smirk </span>
      <span>😍 = heart eyes </span>
      <span>😘 = kissing heart </span>
      <span>😚 = kissing closed eyes </span>
      <span>😳 = flushed </span>
      <span>😌 = relieved </span>
      <span>😁 = grin </span>
      <span>😉 = wink </span>
      <span>😜 = stuck out tongue winking eye </span>
      <span>😝 = stuck out tongue closed eyes </span>
      <span>😀 = grinning </span>
      <span>😗 = kissing </span>
      <span>😙 = kissing smiling eyes </span>
      <span>😛 = stuck out tongue </span>
      <span>😴 = sleeping </span>
      <span>😟 = worried </span>
      <span>😦 = frowning </span>
      <span>😧 = anguished </span>
      <span>😮 = open mouth </span>
      <span>😬 = grimacing </span>
      <span>😕 = confused </span>
      <span>😯 = hushed </span>
      <span>😑 = expressionless </span>
      <span>😒 = unamused </span>
      <span>😅 = sweat smile </span>
      <span>😓 = sweat </span>
      <span>😥 = disappointed relieved </span>
      <span>😩 = weary </span>
      <span>😔 = pensive </span>
      <span>😞 = disappointed </span>
      <span>😖 = confounded </span>
      <span>😨 = fearful </span>
      <span>😰 = cold sweat </span>
      <span>😣 = persevere </span>
      <span>😢 = cry </span>
      <span>😭 = sob </span>
      <span>😂 = joy </span>
      <span>😲 = astonished </span>
      <span>😱 = scream </span>
      <span>😫 = tired face </span>
      <span>😠 = angry </span>
      <span>😡 = rage </span>
      <span>😤 = triumph </span>
      <span>😪 = sleepy </span>
      <span>😋 = yum </span>
      <span>😷 = mask </span>
      <span>😎 = sunglasses </span>
      <span>😵 = dizzy face </span>
      <span>👿 = imp </span>
      <span>😈 = smiling imp </span>
      <span>😐 = neutral face </span>
      <span>😶 = no mouth </span>
      <span>😇 = innocent </span>
      <span>👽 = alien </span>
      <span>💛 = yellow heart </span>
      <span>💙 = blue heart </span>
      <span>💜 = purple heart </span>
      <span>❤️ = heart </span>
      <span>💚 = green heart </span>
      <span>💔 = broken heart </span>
      <span>💓 = heartbeat </span>
      <span>💗 = heartpulse </span>
      <span>💕 = two hearts </span>
      <span>💞 = revolving hearts </span>
      <span>💘 = cupid </span>
      <span>💖 = sparkling heart </span>
      <span>✨ = sparkles </span>
      <span>⭐ = star </span>
      <span>🌟 = star2 </span>
      <span>💫 = dizzy </span>
      <span>💥 = boom </span>
      <span>💢 = anger </span>
      <span>❗ = exclamation </span>
      <span>❓ = query </span>
      <span>❕ = grey exclamation </span>
      <span>❔ = grey question </span>
      <span>💤 = zzz </span>
      <span>💨 = dash </span>
      <span>💦 = sweat drops </span>
      <span>🎶 = notes </span>
      <span>🎵 = musical note </span>
      <span>🔥 = fire </span>
      <span>💩 = poop </span>
      <span>👍 = thumbsup </span>
      <span>👎 = thumbsdown </span>
      <span>👌 = ok hand </span>
      <span>👊 = punch </span>
      <span>✊ = fist </span>
      <span>✌ = v </span>
      <span>👋 = wave </span>
      <span>✋ = raised hand </span>
      <span>👐 = open hands </span>
      <span>☝ = point up </span>
      <span>👇 = point down  </span>
      <span>👈 = point left </span>
      <span>👉 = point right </span>
      <span>🙌 = raised hands </span>
      <span>🙏 = pray </span>
      <span>👆 = point up 2 </span>
      <span>👏 = clap </span>
      <span>💪 = muscle </span>
      <span>🤘 = metal </span>
      <span>👫 = couple </span>
      <span>👪 = family </span>
      <span>👬 = two men holding hands </span>
      <span>👭 = two women holding hands </span>
      <span>💃 = dancer </span>
      <span>👰 = bride with veil </span>
      <span>🙍 = person frowning </span>
      <span>💏 = couplekiss </span>
      <span>💑 = couple with heart </span>
      <span>💅 = nail care </span>
      <span>👦 = boy </span>
      <span>👧 = girl </span>
      <span>👩 = woman </span>
      <span>👨 = man </span>
      <span>👶 = baby </span>
      <span>👵 = older woman </span>
      <span>👴 = older man </span>
      <span>👷 = construction worker </span>
      <span>👼 = angel </span>
      <span>👸 = princess </span>
      <span>😺 = smiley cat </span>
      <span>😸 = smile cat </span>
      <span>😻 = heart eyes cat </span>
      <span>😽 = kissing cat </span>
      <span>😼 = smirk cat </span>
      <span>🙀 = scream cat </span>
      <span>😿 = crying cat face </span>
      <span>😹 = joy cat </span>
      <span>😾 = pouting cat </span>
      <span>👹 = japanese ogre </span>
      <span>👺 = japanese goblin </span>
      <span>🙈 = see no evil </span>
      <span>🙉 = hear no evil </span>
      <span>🙊 = speak no evil </span>
      <span>💀 = skull </span>
      <span>🐾 = feet </span>
      <span>👄 = lips </span>
      <span>💋 = kiss </span>
      <span>💧 = droplet </span>
      <span>👂 = ear </span>
      <span>👀 = eyes </span>
      <span>👃 = nose </span>
      <span>👅 = tongue </span>
      <span>💌 = love letter </span>
      <span>👤 = bust in silhouette </span>
      <span>👥 = busts in silhouette </span>
      <span>💬 = speech balloon </span>
      <span>💭 = thought balloon </span>
    </div>
  </div >
)

storiesOf('Layout/examples', module)
  .add('post', () =>
    <PostPage
      slug="/blog/template"
      title="Don't Panic."
      date="2019-02-01T00:00:00.000Z"
      tags={["display", "example", "post"]}
      excerpt="This is an example of what this page will look like."
      timeToRead={42}
      html={html}
      number={42}
      next={post}
      previous={post}
    />
  )
