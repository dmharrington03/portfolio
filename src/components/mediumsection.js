import React from "react"
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";


// import MediumCaption from "./mediumcaption"
import { StaticImage } from "gatsby-plugin-image"

const MediumSection = () => {

  UIkit.use(Icons);

  const PlanetCap = `An exploration of exoplanet data provided by NASA and the Planetary Habitability Library (PHL) at the University of Puerto Rico. Calculation of the Earth Similarity Index and comparison with various planetary and stellar parameters. Built with Python using matplotlib, numpy, and Pandas.`;

  const mapCap = `A series of maps using data from the NOAA GFS built with Python using Cartopy, matplotlib, Numpy, and Siphon/netCDF4. View Google Colab notebook <a href="https://colab.research.google.com/drive/1sCjOxNXqot214c-8KwL5j-ZKkSSK60Lb?usp=sharing" target="_blank" rel="noopener noreferrer">here.</a>`

  return (
    <div className="uk-flex uk-flex-column" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      
      {/* Exoplanet Data */}
      <div className="uk-height-expand">

        <div className="uk-flex-middle uk-grid uk-margin-large" data-uk-grid>
          <div className="uk-width-1-2@m">
            <StaticImage src="../displays/project0/esi_phase.jpg" alt="ESI Phase" imgClassName="medium-caption"/>
          </div>

          <div className="uk-width-expand uk-flex-first@m">
            <a href="https://colab.research.google.com/drive/1hAK7Wj2q_ZO6vMvVEQdE0LC5vM0YKWeq?usp=sharing" className="uk-link-reset" rel="noreferrer" target="_blank">
              <h4 className="uk-margin-small-bottom">
                <b><i>Exoplanet Data Analysis</i></b>
                <span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </h4>
            </a>
            <section>{ PlanetCap }</section>
          </div>
        </div>
      </div>

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


    </div>
  );
  
}

export default MediumSection