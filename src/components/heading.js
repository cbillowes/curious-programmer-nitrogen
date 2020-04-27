import React from "react"
import PropTypes from "prop-types"

const H1 = ({ className, children }) => {
  if (!children) return <></>

  return <h1 className={className}>{children}</h1>
}

const H2 = ({ className, children }) => {
  if (!children) return <></>

  return <h2 className={className}>{children}</h2>
}

const H3 = ({ className, children }) => {
  if (!children) return <></>

  return <h3 className={className}>{children}</h3>
}

const H4 = ({ className, children }) => {
  if (!children) return <></>

  return <h4 className={className}>{children}</h4>
}

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

H1.propTypes = propTypes
H2.propTypes = propTypes
H3.propTypes = propTypes
H4.propTypes = propTypes

export { H1, H2, H3, H4 }
