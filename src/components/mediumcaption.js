import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import UIkit from "uikit";


const MediumCaption = ({source, title, caption, invert}) => {

    let invertedClass = invert ? "uk-flex-first@m" : ""

    return (
        <div className="uk-height-expand">

                <div className="uk-flex-middle uk-grid uk-margin-large" data-uk-grid>
                  <div className="uk-width-1-2@m">
                    <img src={source} alt={title} className="medium-caption" data-uk-img="loading: eager"/>
                  </div>

                  <div className={"uk-width-expand " + invertedClass}>
                    <h4 className="uk-margin-small-bottom">
                      <b><i>{title}</i></b>
                      <span className="uk-icon" uk-icon="icon: triangle-right"></span>
                    </h4>
                    <section dangerouslySetInnerHTML={{ __html: caption }}></section>
                  </div>
                </div>
        </div>
    );
}

export default MediumCaption