import React from "react"
import Tag from "../components/tag"

const Credit = ({ to, title, children }) => {
  if (to) {
    return (
      <div>
        <Tag
          title={title} 
          to={to}
        />
        {children}
      </div>
    ) 
  }
  return (
    <div>
      <Tag
        title={title}
      />
      {children}
    </div>
  )
}

export default Credit
