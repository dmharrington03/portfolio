import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

import UIkit from "uikit";


const SmallColumnSection = () => {

  return (
    <div>
      <ul className="uk-list uk-list-divider">
        <li className="uk-flex" uk-scrollspy="cls: uk-animation-fade; delay: 500">
          <StaticImage className="uk-width-1-5" src="../images/electricfields.png"/>
          <div className="uk-width-4-5 uk-flex uk-flex-center uk-flex-middle uk-padding-remove">
            <p>lorem ipsum</p>
          </div>
        </li>
        <li className="uk-flex" uk-scrollspy="cls: uk-animation-fade; delay: 500">
          <StaticImage className="uk-width-1-5" src="../images/electricfields.png"/>
          <div className="uk-width-4-5 uk-flex uk-flex-center uk-flex-middle uk-padding-remove">
            <p>lorem ipsum</p>
          </div>
        </li>
      </ul>
      {/* <div className="uk-hidden">
        <iframe className="uk-width-1-1" height={800} src="https://editor.p5js.org/dmharrington03/full/q53U96BRK"></iframe>
      </div> */}
    </div>
  )
}

export default SmallColumnSection