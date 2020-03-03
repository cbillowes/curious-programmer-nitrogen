import React from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'

const Credit = ({ to, title, children }) => {
  const body = children || title
  return (
    <div>
      {to}
      {body}
    </div>
  )

  // if (to) {
  //   return (
  //     <div>
  //       <Tag
  //         title={title}
  //         to={to}
  //       />
  //       {body}
  //     </div>
  //   )
  // }
  // return (
  //   <div>
  //     <Tag
  //       title={title}
  //     />
  //     {body}
  //   </div>
  // )
}

Credit.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Credit

//TODO: use tags instead of inline stuffs