import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

import UIkit from "uikit";


const SmallSection = () => {

  const scrollRight = () => {
    try {
      document.getElementById("scroll").scrollLeft += 220 * 1;
    } catch(err) {
      console.log(err)
    }
  }
  const scrollLeft = () => {
    try {
      document.getElementById("scroll").scrollLeft -= 220 * 1;
    } catch(err) {
      console.log(err)
    }
  }

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

        <div className="uk-position-relative" uk-scrollspy="cls: uk-animation-fade; delay: 500">
          <div className="scroll-wrapper" id="scroll">

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

          <div className="end-overlay uk-overlay uk-position-top-right">

          </div>
          <button className="uk-overlay uk-position-center-left move-left" onClick={scrollLeft}
            href="" uk-scroll><span uk-icon="icon: chevron-left; ratio: 3"></span></button>
          <button className="move-right" onClick={scrollRight}
            href="" uk-scroll><span uk-icon="icon: chevron-right; ratio: 3"></span></button>
        </div>
      )}/>
    )
}

export default SmallSection