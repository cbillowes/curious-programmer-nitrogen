import React from "react"
import { Tag, Bare } from "../components/tag"

const Credit = ({ to, title, children }) => {
  return (
    <p>
      <Bare title={title}></Bare>
      <Tag tag={title} slug={to}></Tag>
      {children}
    </p>
  )
}

export default Credit
