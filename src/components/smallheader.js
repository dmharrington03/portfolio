import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';


const SmallHeader = ({title}) => {

    UIkit.use(Icons);

    return (
        <header className="header">
            <div className="uk-flex uk-flex-middle uk-flex-column">
            <div className="uk-width-1-1 top" >

            <a className="small-home-link" href="/">Back to Home</a>
            </div>
                <h1 className="logo uk-margin-small-bottom uk-padding-small uk-margin@s">{title}</h1>
                <div className="profile-wrapper">
                    <StaticImage
                        imgClassName="prof"
                        className="pic1 uk-display-block"
                        src="../images/headshot.png"
                        placeholder="blurred"
                        alt="Profile picture"
                    />
                </div>
            </div>
        </header>
    );
}

export default SmallHeader