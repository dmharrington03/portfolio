import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import UIkit from "uikit";


const MediumCaption = ({source, title, caption}) => {


    return (
        <div>
              <p className="caption">
                <img src={ source } className="uk-float-left uk-margin-right uk-margin-bottom medium-caption"/>
                <h4 className="uk-margin-small-bottom uk-margin-top"><i>{title}</i></h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
        </div>
    );
}

export default MediumCaption