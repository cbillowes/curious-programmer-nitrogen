import React from 'react'

const H1 = ({ className, children }) => {
  if (!children) return <></>

  return (
    <h1 className={className}>{children}</h1>
  )
}

const H2 = ({ className, children }) => {
  if (!children) return <></>

  return (
    <h2 className={className}>{children}</h2>
  )
}

const H3 = ({ className, children }) => {
  if (!children) return <></>

  return (
    <h3 className={className}>{children}</h3>
  )
}

const H4 = ({ className, children }) => {
  if (!children) return <></>

  return (
    <h4 className={className}>{children}</h4>
  )
}

export { H1, H2, H3, H4 }

//TODO: add proptypes