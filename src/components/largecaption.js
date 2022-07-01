import * as React from "react"

import UIkit from "uikit";


const LargeCaption = ({source, title, caption}) => {


    return (
        <div className="uk-height-expand">

                <div className="uk-grid uk-margin-large" data-uk-grid>
                  <img src={source} alt={title} className="uk-margin-remove-bottom" data-uk-img="loading: eager"/>

                  <div className={"uk-margin-small-top"}>
                    <h4 className="uk-margin-small-bottom"><b><i>{title}</i></b></h4>
                    <section dangerouslySetInnerHTML={{ __html: caption }}></section>
                  </div>
                </div>
        </div>
    );
}

export default LargeCaption