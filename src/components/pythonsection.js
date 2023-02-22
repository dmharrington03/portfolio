import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const PythonSection = () => {

  const notebook = "https://colab.research.google.com/drive/1VdJjyAg9Sfl5Kz0Ktq0SNqloGC3hFZJ2?usp=sharing";

  return (
    <div>
      <ul className="uk-list uk-padding-remove">
        <li className="uk-flex-middle uk-grid" uk-scrollspy="cls: uk-animation-fade; delay: 100" data-uk-grid>
          <div className="uk-width-2-5@m uk-width-1-2@s uk-width-1-1 uk-flex uk-flex-middle">
            <StaticImage width={500} height={300} src="../images/meep/diffraction.png"/>
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-remove">
              <p>EM FDTD waveguide simulations with meep. Vizualization of spatial modes and component magnitudes with matplotlib. Also explores single slit diffraction and interference patterns. </p>
              <button className="uk-button uk-visible@m" href={notebook}>
                <a href={notebook} target="_blank" rel="noopener noreferrer" className="uk-link-text">
                  Open Notebook
                </a>
              </button>
              <a href={notebook} target="_blank" rel="noopener noreferrer" className="uk-hidden@m uk-link-text">
                Open Notebook<span className="uk-icon" uk-icon="icon: triangle-right"></span>
              </a>
            </div>
            

          </div>
        </li>
       
      </ul>
    </div>
  )
}

export default PythonSection