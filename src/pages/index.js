import React, { createElement } from 'react'

export default ({ data }) => {
  return (
    <ul>
    </ul>
  )
}
export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
