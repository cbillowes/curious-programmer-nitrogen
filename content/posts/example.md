---
title: Example
date: 2016-01-01 05:00:00 +0200
photo: mauritius.jpg
credit: Clarice Bouwer
creditLink: https://clarice.bouwer.dev
creditSource: personal
tags:
  - Personal Brands
---

**YML notes:**
* `photo`: filename of image under /posts
* `credit`: name of photographer, website etc
* `creditLink`: link to the image or author page
* `creditSource`: personal | unsplash | internet

### Code blocks

```bash
sudo npm install -g gatsby-cli # Update the `npm` CLI client
```

```clojure
(defn print-something
  []
  (let [somethings '("do" "not" "panic!")]
    (println (apply str (interpose " " somethings)))))
```


```nginx:title=nginx.conf
# This is our Solr instance
# We will access it through SSL instead of using the port directly
location /solr {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass "http://localhost:8983";
}

error_page 404 /404.html;
    location = /40x.html {
}

error_page 500 502 503 504 /50x.html;
    location = /50x.html {
}
```

```python{numberLines: true}
from scrapy.item import Item, Field

class BlogItem(Item):
    title = Field()
    url = Field()
    text = Field()
```

---

# Heading level one

## Heading level two

### Heading level three

#### Heading level four

##### Heading level five

###### Heading level six

## Add a still gif

All gifs in the project **outside** of the `/images/gifs` directory are copied to `/static/gifs/` on build.

![Interpretation](/static/gifs/endianness.gif "Example of a 32-bit integer committed to memory differently for big-endian and little-endian")

## :art: Typography

### Blockquotes

> **Blockquote:**
> A great resource :bulb: for finding emojis and using them as is, is [emojipedia](https://emojipedia.org/).
> Possible remark codes are in this [cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/).

....

> This link has [not been visited](http://you-aint-going-nowhere.ever).
> This link has [been visit](/#).

....

> > To understand recursion you must understand recursion.

### Paragraphs, styling and emojis
I love deadlines. :innocent: I like the whooshing sound they make as they fly by. In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move. '**This must be Thursday**,' :smile: said Arthur to himself, sinking low over his beer. 'I never could get the hang of Thursdays. I may not have gone where I intended to go, but I think I have ended up where I needed to be. Time is an illusion. Lunchtime doubly so.

Flying is learning how to throw yourself at the ground and miss. A common mistake :green_heart: that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools. Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?

Anyone who is capable of getting themselves made President should on no account be allowed to do the job. The ships hung in the sky in much the same way that bricks don't. :skull:
*posted on Monday, 1 April 2019 by Douglas Adams (Est. 42 minute read)*

### Lists

#### Ordered

1. I love deadlines. :innocent: I like the whooshing sound they make as they fly by. In the beginning the Universe was created.
   This has made a lot of people very angry and been widely regarded as a bad move.

1. I needed to be. Time is an illusion. Lunchtime doubly so.

1. Anyone who is capable of getting themselves made President should on no account be allowed to do the job.

#### Unordered

* I love deadlines. :innocent: I like the whooshing sound they make as they fly by. In the beginning the Universe was created.
  This has made a lot of people very angry and been widely regarded as a bad move.

* I needed to be. Time is an illusion. Lunchtime doubly so.

* Anyone who is capable of getting themselves made President should on no account be allowed to do the job.


## :tada: Remark plugins

### gist

`gist:cbillowes/7c3f3f6de72ba9e92ad4c31c7410e072#unhide.sh`

### youtube

`youtube:https://www.youtube.com/embed/2Xc9gXyf2G4`

### tweet

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;Cool Chrome DevTools tips and tricks you wish you knew already&quot; by <a href="https://twitter.com/flaviocopes?ref_src=twsrc%5Etfw">@flaviocopes</a><a href="https://t.co/G2ReQ7xrvw">https://t.co/G2ReQ7xrvw</a></p>&mdash; Chrome DevTools (@ChromeDevTools) <a href="https://twitter.com/ChromeDevTools/status/1019627868500955137?ref_src=twsrc%5Etfw">July 18, 2018</a></blockquote>

### gifs

`gif:nyancat.gif:caption=Nyanyanyanyanyanyanya`

Gif does not exist :point_down:

`gif:look-away.gif:caption=This picture does not exist!`
