import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const SmallColumnSection = () => {

  const eField = "https://editor.p5js.org/dmharrington03/full/q53U96BRK";
  const waves = "https://editor.p5js.org/dmharrington03/full/SvbNu0WX7";

  return (
    <div>
      <ul className="uk-list uk-padding-remove">
        <li className="uk-flex-middle uk-grid" uk-scrollspy="cls: uk-animation-fade; delay: 500" data-uk-grid>
          <div className="uk-width-1-5@m uk-width-1-2@s uk-width-1-1 uk-flex uk-flex-middle">
            <StaticImage width={300} height={300} src="../images/p5/waves.png"/>
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-remove">
              <p>Simulation of electromagnetic waves from two sources propagating through space with graphs for wave amplitude at a barrier and amplitude of interference pattern.</p>
              <button className="uk-button uk-visible@m" data-uk-toggle={"target: #modal-2"}>Open Demo</button>
              <a href={waves} target="_blank" rel="noopener noreferrer" className="uk-hidden@m uk-link-text">
                Open Demo<span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </a>
            </div>
            
            <div id="modal-2" data-uk-modal="bg-close: true" className="" data-uk-height-viewport>
              <div className="uk-height-1-1 uk-width-2-3 uk-flex uk-flex-column uk-modal-dialog uk-modal-body">
                <iframe title="em waves" className="uk-width-1-1 uk-height-1-1" src={waves}></iframe>
                <button class="uk-modal-close-default" type="button" data-uk-close></button>
                <a href={waves} target="_blank" rel="noopener noreferrer" className="uk-link-text">
                  <i>Or open in new tab <span className="uk-icon" uk-icon="icon: triangle-right"></span></i>
                </a>
              </div>
            </div>

          </div>
        </li>
        <li className="uk-flex-middle uk-grid" data-uk-grid uk-scrollspy="cls: uk-animation-fade; delay: 500">
          <div className="uk-width-1-5@m uk-width-1-2@s uk-width-1-1 uk-flex uk-flex-middle">
            <StaticImage width={300} height={300} src="../images/p5/electricfields.png"/>
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-remove">
              <p>Demonstration of Coulomb's Law through a simulation of two point charges that draws the electric field lines between and around them. Points have variable charges that influence the number of field lines drawn.</p>
              <button className="uk-button uk-visible@m" data-uk-toggle={"target: #modal-1"}>Open Demo</button>
              <a href={eField} target="_blank" rel="noopener noreferrer" className="uk-hidden@m uk-link-text">
                Open Demo<span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </a>
            </div>
            
            <div id="modal-1" data-uk-modal="bg-close: true" className="" data-uk-height-viewport>
              <div className="uk-height-1-1 uk-width-2-3 uk-flex uk-flex-column uk-modal-dialog uk-modal-body">
                <iframe title="electric field lines" className="uk-width-1-1 uk-height-1-1" src={eField}></iframe>
                <button class="uk-modal-close-default" type="button" data-uk-close></button>
                
                <a href={eField} target="_blank" rel="noopener noreferrer" className="uk-link-text">
                  <i>Or open in new tab <span className="uk-icon" uk-icon="icon: triangle-right"></span></i>
                </a>
                  
              </div>
            </div>

          </div>
        </li>
      </ul>
    </div>
  )
}

export default SmallColumnSection