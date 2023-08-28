import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const ResearchSection = () => {

  return (
    <div>
      <ul className="uk-list uk-padding-remove">
        <li className="uk-flex-middle uk-grid" uk-scrollspy="cls: uk-animation-fade; delay: 100" data-uk-grid>
          <div className="uk-width-2-5@m uk-width-1-2@s uk-width-1-1 uk-flex uk-flex-middle">
            <StaticImage width={500} height={300} src="../images/mos2/devicebw.png"/>
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-remove">
              <p>
              Molybdenum disulfide (MoS2) is a promising 2D material which in its monolayer structure is a direct bandgap semiconductor. It has a high optical absorption and good mobility for its thickness, making it
              appealing for nanoscale photodetection applications. My work included investigating the passivation effects of various polymers on the performance of FET MoS2 photodetectors.
              </p>
              {/* TODO fix link and create page */}
              <button className="uk-button uk-visible@m" href={""}>
                <a href={""} target="_blank" rel="noopener noreferrer" className="uk-link-text">
                  Read More
                </a>
              </button>
              <a href={""} target="_blank" rel="noopener noreferrer" className="uk-hidden@m uk-link-text">
               Read More<span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </a>
            </div>
            

          </div>
        </li>
       
      </ul>
    </div>
  )
}

export default ResearchSection