import React from "react"

import LargeCaption from "./largecaption"
import { StaticQuery, graphql } from "gatsby"

const LargeSection = () => {

  return (
  <StaticQuery
      query={graphql`
        query largeQuery {
          allMarkdownRemark(filter: {frontmatter: {description: {glob: "L-**"}}}) {
            nodes {
              id
              frontmatter {
                title
                description
              }
              html
              fields {
                slug
              }
            }
          }
          allFile(filter: {relativeDirectory: {glob: "project*"}, extension: {in: ["jpg", "png"]}}) {
            nodes {
              publicURL
              name
            }
          }
        }
      `}
      render={(data) => (
        <div className="uk-flex uk-flex-column">
          {data.allMarkdownRemark.nodes.map((post) => {
            const imgMatch = data.allFile.nodes.find((node) => post.frontmatter.description === node.name);
            return (
              <LargeCaption
                source={imgMatch ? imgMatch.publicURL : "/src/images/error.jpg"}
                title={post.frontmatter.title || 'error'}
                caption={post.html} />
                )
            })
          }
        </div>
      ) 
    }
  />)
}

export default LargeSection