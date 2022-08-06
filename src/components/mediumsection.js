import React from "react"

import MediumCaption from "./mediumcaption"
import { StaticQuery, graphql } from "gatsby"

const MediumSection = () => {

  return (
  <StaticQuery
      query={graphql`
        query sectionQuery {
          allMarkdownRemark(filter: {frontmatter: {title: {glob: "M-**"}}}) {
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
        <div className="uk-flex uk-flex-column" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
          {data.allMarkdownRemark.nodes.map((post, index) => {
            // const title = post.frontmatter.title || post.fields.slug;
            const imgMatch = data.allFile.nodes.find((node) => post.frontmatter.title === node.name);
            return (
              <MediumCaption
                source={imgMatch ? imgMatch.publicURL : ""}
                title={post.frontmatter.description || 'error'}
                caption={post.html}
                invert={index % 2} />
                )
            })
          }
        </div>
      ) 
    }
  />)
}

export default MediumSection