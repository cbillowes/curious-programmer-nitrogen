import React from "react"
import Tag from "../components/tag"

const Credit = ({ to, title, readonly, children }) => {
  if (to) {
    return (
      <div>
        <Tag
          title={title} 
          readonly={readonly}
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
        readonly={readonly}
      />
      {children}
    </div>
  )
}

export default Credit
