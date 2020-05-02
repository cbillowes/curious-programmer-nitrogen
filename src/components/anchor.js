import React from "react"
import PropTypes from "prop-types"
import SuperLink from "gatsby-plugin-superlink"
import "../styles/anchor.scss"

const Anchor = ({ to, title, className, children, ...props }) => {
  return (
    <>
      {" "}
      <SuperLink to={to} title={title} className={className} {...props}>
        {children}
      </SuperLink>
      {" "}
    </>
  )
}

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Anchor
