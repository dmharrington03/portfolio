import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

import UIkit from "uikit";


const SmallSection = () => {

  return (
    <StaticQuery
      query={graphql`
        query images {
          allFile(filter: {relativeDirectory: {eq: "small"}}) {
            nodes {
              name
              publicURL
            }
          }
          allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/blog/**"}}) {
            nodes {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      `}
      render={(data) => (

        <div className="uk-position-relative">
          <div className="scroll-wrapper">

            <div className="scroll">
              {data.allFile.nodes.map((image, index) => {
                
                const postMatch = data.allMarkdownRemark.nodes.find((node) => image.name === node.frontmatter.title)
                
                let id;
                if (index === 0)
                  id = 'first'
                else if (index === data.allFile.nodes.length - 1)
                  id = 'last'
                
                return (
                <div className="scroll-item" id={id}>
                  {/* Remove whitespace from slug */}
                  <a className="page-link" href={ postMatch ? postMatch.fields.slug.replace(/\s+/g, '') : ''}>
                    <img src={image.publicURL} className="click-img" alt={image.name}/>
                    <h5 className="uk-margin-small">{image.name}</h5>
                  </a>
                </div>
                )

              })}

            </div>

          </div>

          <a className="uk-overlay uk-position-center-left move-left"
            href="#first" uk-scroll><span uk-icon="icon: chevron-left; ratio: 3"></span></a>
          <a className="move-right"
            href="#last" uk-scroll><span uk-icon="icon: chevron-right; ratio: 3"></span></a>
        </div>
      )}/>
    )
}

export default SmallSection