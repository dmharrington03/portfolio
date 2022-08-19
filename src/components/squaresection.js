import React from "react"

import SquareCaption from "./squarecaption"
import { StaticQuery, graphql } from "gatsby"

const SquareSection = () => {

  return (
  <StaticQuery
      query={graphql`
        query squareQuery {
          allFile(filter: {extension: {in: ["jpg", "png"]}, name: {glob: "SQ-**"}}) {
            nodes {
              publicURL
              name
            }
          }
          allMarkdownRemark(filter: {frontmatter: {description: {glob: "SQ-**"}}}) {
            nodes {
              html
              frontmatter {
                description
                title
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="uk-grid uk-child-width-1-3@s" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
          {data.allMarkdownRemark.nodes.map((post) => {
            const imgMatch = data.allFile.nodes.find((node) => post.frontmatter.description === node.name);
            return (
              <SquareCaption
                imgURL={imgMatch ? imgMatch.publicURL : ""}
                title={post.frontmatter.title || 'error'}
                description={post.html} />
                )
            })
          }
          <p className="uk-text-small" uk-scrollspy="cls: uk-animation-slide-left-small; delay: 1000"><i>and this site</i></p>
        </div>
      ) 
    }
  />)
}

export default SquareSection