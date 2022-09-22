import React from "react"
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";


import { StaticImage } from "gatsby-plugin-image"

const MediumSectionSplit = () => {

  UIkit.use(Icons);

  const coffeeCap = `The physical product that hosts the server and runs the backend that interfaces with the web app. Built from birch plywood, a Raspberry Pi 3, and an SPST relay controlling a hot plate.`;

  const tankCap = `A Lego tank built using an Arduino Nano and hacked Lego Mindstorms motors. Controlled via serial communication with computer.`

  return (
    <div className="uk-flex uk-flex-column" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      
      {/* Cartography */}
      <div className="uk-height-expand">

        <div className="uk-flex-middle uk-grid" data-uk-grid>
          <div className="uk-width-1-2@m">
            <div className="uk-flex uk-flex-between">
              <StaticImage placeholder="blur" className="uk-margin-right" src="../displays/project7/tank stars.jpeg" alt="Maps" imgClassName="medium-caption"/>
              <StaticImage placeholder="blur" src="../displays/project7/tank05.jpeg" alt="Maps" imgClassName="medium-caption"/>
            </div>
          </div>

          <div className="uk-width-expand">
            
            <h4 className="uk-margin-small-bottom">
            <b><i>LE-60 Tank</i></b>
            </h4>
            <section dangerouslySetInnerHTML={{ __html: tankCap }} ></section>
          </div>
        </div>
      </div>
      <hr className="uk-margin"/>
      {/* Coffee Machine */}
      {/* <div className="uk-height-expand">

        <div className="uk-flex-middle uk-grid uk-margin-large" data-uk-grid>
          <div className="uk-width-1-2@m">
            <div className="uk-flex uk-flex-between">
              <StaticImage placeholder="blur" className="uk-margin-right" src="../displays/project8/tank05.jpeg" alt="MNIST" imgClassName="medium-caption"/>
              <StaticImage placeholder="blur" src="../displays/project8/store1.jpeg" alt="MNIST" imgClassName="medium-caption"/>
            </div>
          </div>

          <div className="uk-width-expand">
            <a href="https://github.com/dmharrington03/coffee-machine" target="_blank" rel="noreferrer" className="uk-link-reset">
              <h4 className="uk-margin-small-bottom">
                <b><i>IoT Coffee Maker</i></b>
                <span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </h4>
            </a>
            <section>{ coffeeCap }</section>
          </div>

        </div>
      </div> */}

    </div>
  );
  
}

export default MediumSectionSplit