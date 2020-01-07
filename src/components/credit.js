import React from "react"
import { External } from "../components/tag"

const Credit = ({ to, title, children }) => {
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

export default Credit
