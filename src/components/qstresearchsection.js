import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { KatexOptions } from "katex"


const QSTResearchSection = () => {

  return (
    <div>
      <ul className="uk-list uk-padding-remove">
        <li className="uk-flex-middle uk-grid" uk-scrollspy="cls: uk-animation-fade; delay: 100" data-uk-grid>
          <div className="uk-width-2-5@m uk-width-1-2@s uk-width-1-1 uk-flex uk-flex-middle">
            <StaticImage width={210} height={220} src="../images/bloch_sphere.png"/> 
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-remove">
              <p>
              Quantum state tomography is generally not efficient and uses a high number of measurements. I 
              am working on applying new results in matrix analysis to recover the density matrix efficiently
              using fewer measurements than traditional methods. This method uses results from optimal transport
              and the Bures-Wasserstein geometry to efficiently recover the state with only Pauli basis measurements.
              </p>
              {/* <button className="uk-button uk-visible@m" href={"/2dmaterials"}>
                <a href={"/2dmaterials"} rel="noopener noreferrer" className="uk-link-text">
                  Read More
                </a>
              </button> */}
              {/* <a href={""} target="_blank" rel="noopener noreferrer" className="uk-hidden@m uk-link-text">
               Read More<span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </a> */}
            </div>
            

          </div>
        </li>
       
      </ul>
    </div>
  )
}

export default QSTResearchSection;