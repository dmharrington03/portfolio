import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import UIkit from "uikit";


const MediumCaption = ({source, title, caption}) => {


    return (
        <div className="uk-height-expand">
              <p className="caption">

                <div className="uk-flex-middle uk-grid" data-uk-grid>
                  <div className="uk-width-1-3@m uk-flex-first"><img src={ source } className="medium-caption"/></div>

                  <div className="uk-width-2-3@m">
                    <h4 className="uk-margin-small-bottom uk-margin-top"><i>{title}</i></h4>
                    <section dangerouslySetInnerHTML={{ __html: caption }}></section>
                  </div>
                </div>
              </p>
        </div>
    );
}

export default MediumCaption