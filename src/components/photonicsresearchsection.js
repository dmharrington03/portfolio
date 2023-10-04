import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const PhotonicsResearchSection = () => {

  return (
    <div>
      <ul className="uk-list uk-padding-remove">
        <li className="uk-flex-middle uk-grid" uk-scrollspy="cls: uk-animation-fade; delay: 100" data-uk-grid>
          <div className="uk-width-2-5@m uk-width-1-2@s uk-width-1-1 uk-flex uk-flex-middle">
            <StaticImage width={500} height={300} src="../images/meep/modes1.png"/>
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-remove">
              <p>
                Transverse spatial modes realize another degree of freedom in integrated photonic systems. Exploiting these modes has led to promising applications in light shaping and quantum information. I am interested in manipulating the superposition of modes in a waveguide to create arbitrary field distributions for applications in single-photon emitter control.
              </p>
              {/* TODO fix link and create page */}
              {/* <button className="uk-button uk-visible@m" href={"/2dmaterials"}>
                <a href={"/2dmaterials"} rel="noopener noreferrer" className="uk-link-text">
                  Read More
                </a>
              </button>
              <a href={""} target="_blank" rel="noopener noreferrer" className="uk-hidden@m uk-link-text">
               Read More<span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </a> */}
            </div>
            

          </div>
        </li>
       
      </ul>
    </div>
  )
}

export default PhotonicsResearchSection;