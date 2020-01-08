import React from "react"
import { External, Bare } from "../components/tag"

const Credit = ({ to, title, children }) => {
  if (to) {
    return (
      <div>
        <External 
          to={to}
        >
          {title}
        </External>
        {children}
      </div>
    ) 
  }
  return (
    <div>
      <Bare>
        {title}
      </Bare>
      {children}
    </div>
  )
}

export default Credit
