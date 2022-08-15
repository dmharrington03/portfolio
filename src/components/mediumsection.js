import React from "react"
import MNIST from "./mnist";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";


// import MediumCaption from "./mediumcaption"
import { StaticImage } from "gatsby-plugin-image"

const MediumSection = () => {

  UIkit.use(Icons);

  const MNISTCap = `An interactive web app demonstrating neural network predictions of handwritten numbers based on the MNIST dataset. Originally written as a standalone page in Python using Flask, Tensorflow, and p5.js, then ported to TensorflowJS for web hosting with Gatsby/React.`;

  const mapCap = `A series of maps using data from the NOAA GFS built with Python using Cartopy, matplotlib, Numpy, and Siphon/netCDF4. View Google Colab notebook <a href="https://colab.research.google.com/drive/1sCjOxNXqot214c-8KwL5j-ZKkSSK60Lb?usp=sharing" target="_blank" rel="noopener noreferrer">here.</a>`

  return (
    <div className="uk-flex uk-flex-column" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      
      {/* Cartography */}
      <div className="uk-height-expand">

        <div className="uk-flex-middle uk-grid uk-margin-large" data-uk-grid>
          <div className="uk-width-1-2@m">
            <StaticImage src="../displays/project1/M-layout1.png" alt="Maps" imgClassName="medium-caption"/>
          </div>

          <div className="uk-width-expand">
            <a href="https://colab.research.google.com/drive/1sCjOxNXqot214c-8KwL5j-ZKkSSK60Lb?usp=sharing" target="_blank" rel="noopener noreferrer" className="uk-link-reset">
              <h4 className="uk-margin-small-bottom">
              <b><i>Cartography</i></b>
              <span className="uk-icon" uk-icon="icon: triangle-right"></span>
            </h4></a>
            <section dangerouslySetInnerHTML={{ __html: mapCap }} ></section>
          </div>
        </div>
      </div>

      {/* MNIST Interface */}
      <div className="uk-height-expand">

        <div className="uk-flex-middle uk-grid uk-margin-large" data-uk-grid>
          <div className="uk-width-1-2@m">
            <StaticImage src="../displays/project0/M-MNIST_Interface.png" alt="MNIST" imgClassName="medium-caption"/>
          </div>

          <div className="uk-width-expand uk-flex-first@m">
            <a href="#mnist" className="uk-link-reset" data-uk-toggle="target: #mnist">
              <h4 className="uk-margin-small-bottom">
                <b><i>MNIST Interface</i></b>
                <span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </h4>
            </a>
            <section>{ MNISTCap }</section>
          </div>

          <div id="mnist" data-uk-modal>
              <div class="uk-modal-dialog uk-modal-body uk-width-2-3">
                  <h2 class="uk-modal-title"></h2>
                  <MNIST />
                  <button class="uk-modal-close-default" type="button" data-uk-close></button>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
  
}

export default MediumSection