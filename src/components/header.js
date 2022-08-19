import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';


const Header = () => {

    UIkit.use(Icons);

    return (
        <header className="header">
            <div className="uk-flex uk-flex-middle uk-flex-column">
                <div className="uk-width-1-1 top" ></div>
                <h1 className="logo">DANIEL HARRINGTON</h1>
                    <StaticImage
                        className="pic1 uk-display-block"
                        src="../images/headshot.png"
                        placeholder="blurred"
                        alt="Profile picture"
                    />
            </div>
        </header>
    );
}

export default Header