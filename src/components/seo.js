import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
            }
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{ title || defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={site.siteMetadata.author.name || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="physics, portfolio, computer science, cs, Tufts, math, programming, quantum computing, quantum" />
      { children }
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo;
