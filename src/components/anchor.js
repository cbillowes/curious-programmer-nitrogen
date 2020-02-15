import React from 'react'
import { Link } from 'gatsby'
import './styles/anchor.scss'

// const BlandInternalLink = ({ to, title, style, children }) => {
//   return (
//     <>
//       { " " }
//       <Link
//         to={to}
//         title={title}
//         style={style}
//         data-component="bland-link-element"
//         className="anchor"
//       >
//         {children}
//       </Link>
//       { " " }
//     </>
//   )
// }

// const InternalLink = ({ to, title, children }) => {
//   return (
//     <>
//     { " " }
//       <Link
//         to={to}
//         title={title}
//         data-component="link-element"
//         className="anchor default"
//       >
//         {children}
//       </Link>
//     { " " }
//     </>
//   )
// }

// const BlandExternalLink = ({ to, title, children }) => {
//   return (
//     <>
//       { " " }
//       <a
//         href={to}
//         rel="nofollow noopener noreferrer"
//         title={title}
//         target="_blank"
//         data-component="bland-external-link-element"
//         className="anchor"
//       >
//         {children}
//       </a>
//       { " " }
//     </>
//   )
// }

// const PrettyExternalLink = ({ to, title, className, children }) => {
//   return (
//     <>
//       { " " }
//       <a
//         href={to}
//         rel="nofollow noopener noreferrer"
//         title={title}
//         target="_blank"
//         data-component="pretty-external-link-element"
//         className={`anchor default ${className}`}
//       >
//         {children}
//       </a>
//       { " " }
//     </>
//   )
// }

// const TagExternalLink = ({ to, title, children }) => {
//   return (
//     <>
//       { " " }
//       <a
//         href={to}
//         rel="nofollow noopener noreferrer"
//         title={title}
//         target="_blank"
//         data-component="tag-external-link-element"
//         className="anchor tag"
//       >
//         {children}
//       </a>
//     </>
//   )
// }

// const TagInternalLink = ({ to, title, children }) => {
//   return (
//     <>
//       { " " }
//       <Link
//         to={to}
//         title={title}
//         data-component="tag-internal-link-element"
//         className="anchor tag"
//       >
//         {children}
//       </Link>
//       { " " }
//     </>
//   )
// }

// function Anchor ({ to, title, bland, tag, className, style, children }) {
//   if (!to) throw new Error(`url for the anchor is required`)
  
//   const external = to.startsWith(`http`) || to.startsWith(`mailto:`)

//   if (tag && external)
//     return (
//       <TagExternalLink
//         to={to}
//         title={title}
//         className={className}
//       >
//         {children}
//       </TagExternalLink>
//     )

//   if (tag)
//     return (
//       <TagInternalLink
//         to={to}
//         title={title}
//         className={className}
//       >
//         {children}
//       </TagInternalLink>
//     )

//   if (external && bland)
//     return (
//       <BlandExternalLink
//         to={to}
//         title={title}
//         className={className}
//       >
//         {children}
//       </BlandExternalLink>
//     )

//   if (external)
//     return (
//       <PrettyExternalLink
//         to={to}
//         title={title}
//         className={className}
//       >
//         {children}
//       </PrettyExternalLink>
//     )

//   if (bland)
//       return (
//         <BlandInternalLink
//           to={to}
//           title={title}
//           className={className}
//           style={style}
//         >
//           {children}
//         </BlandInternalLink>
//       )

//   return (
//     <InternalLink
//       to={to}
//       title={title}
//       className={className}
//     >
//       {children}
//     </InternalLink>
//   )
// }

// export default Anchor

function getClassName(defaultStyle, className) {
  return `${(defaultStyle) ? `free` : ``} ${className || ``}`.trim()
}

const ExternalLink = ({to, title, defaultStyle, className, children}) => {
  return (
    <>
      {" "}
      <a
        href={to}
        rel={`nofollow noopener noreferrer`}
        title={title}
        target={`_blank`}
        className={getClassName(defaultStyle, className)}
        data-component={`anchor-external-link`}
      >
        {children}
      </a>
      {" "}
    </>
  )
}

const InternalLink = ({to, title, defaultStyle, className, children}) => {
  return (
    <>
      {" "}
      <Link 
        to={to}
        title={title}
        className={getClassName(defaultStyle, className)}
        data-component={`anchor-internal-link`}
      >
        {children}
      </Link>
    {" "}
    </>
  )
}

function Anchor ({ to, title, className, defaultStyle, children }) {
  if (!to) throw new Error(`url for anchor is required`)
  const external = to.startsWith(`http`) || to.startsWith(`mailto:`)
  
  if (external)
    return(
      <ExternalLink
        to={to}
        title={title}
        className={getClassName(defaultStyle, className)}
      >
        {children}
      </ExternalLink>
    )

  return (
    <InternalLink
      to={to}
      title={title}
      className={className}
      defaultStyle={defaultStyle}
    >
      {children}
    </InternalLink>
  )
}

export default Anchor
