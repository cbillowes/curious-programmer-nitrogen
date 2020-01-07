import React from "react"
import { Linked } from "../components/tag"

const Credit = ({ to, title, children }) => {
  return (
    <div>
      <Linked 
        to={to}
      >
        {title}
      </Linked>
      {children}
    </div>
  )
}

export default Credit
