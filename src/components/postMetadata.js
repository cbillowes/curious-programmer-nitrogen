import React from 'react'

function PostMetadata({ moment, date, author, ttr }) {
  return (
    <p>
      posted 
      {" "}
      <span>{moment}</span>
      {" "}
      on 
      {" "}
      <span>{date}</span>
      {" "}
      by 
      {" "}
      <span>{author}</span>
      {" "}
      <span><em>(Est. {ttr} minute read)</em></span>
    </p>
  )
}

export default PostMetadata