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
        }
      `}
      render={(data) => (

        <div className="uk-position-relative">
          <div className="scroll-wrapper">

            <div className="scroll">
              {data.allFile.nodes.map((image, index) => {
                
                let id;
                if (index === 0)
                  id = 'first'
                else if (index === data.allFile.nodes.length - 1)
                  id = 'last'
                
                return (
                <div className="scroll-item" id={id}>
                  <img src={image.publicURL} alt={image.name}/>
                  <h5 className="uk-margin-small">{image.name}</h5>
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