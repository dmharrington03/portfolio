import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"


import ResearchSection from "../components/mos2researchsection"
import SmallHeader from "../components/smallheader"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const MoS2Research = ({ data, location }) => {

  const bio = "Hello! I'm Daniel, an undergraduate physics and math student at Tufts University. I am interested in pursuing the broad research areas of condensed matter physics and applied optics. I am looking to learn more about quantum computing, photonics, and astronomy, as well as expand my general skillset and familiarity with the discipline of physics. Outside of science, I love jazz and weightlifting. Read more about my work here or on my Github:"

  const abstract1 = `2D transition metal dichalcogenides (TMDs) have exhibited high carrier mobility, high optical absorption, and high performance in traditional and heterostructure devices, including photodetectors [1]. Among the most studied is molybdenum disulfide (MoS2), a direct bandgap semiconductor, which has been used to produce atomically thin photodetectors with ultrahigh detectivity and responsivity [1]. These devices are susceptible to surface defects caused by irregular growth and air exposure which influence charge carrier dynamics and device performance [2]. Efforts have been made to mitigate adverse effects through passivation, but more work is required to understand relative passivation effects of various polymers. In particular, the poled ferroelectric polymer polyvinylidene difluoride trifluoroethylene (P(VDF-TrFE)) has been shown to improve performance in field-effect transistor (FET) photodetectors [3], but its passivation effect is not well understood.`;
  
  const abstract2 = `In this work, we examine polymer-coated monolayer MoS2 samples on sapphire substrate to investigate the hypothesis that polar fluorine groups in P(VDF-TrFE) would increase charge carrier mobility. Initial characterization methods of samples coated with polymethyl methacrylate (PMMA), Parylene-N, and P(VDF-TrFE) were Raman spectroscopy and hyperspectral photoluminescence (PL) imaging, which revealed no significant changes in Raman spectra and a slight widening and redshift of the A-exciton transition PL peak with PMMA coating. We then employed time-resolved terahertz spectroscopy, finding that the P(VDF-TrFE) coated MoS2 showed slower decay in THz absorption than other samples, indicating longer charge carrier lifetimes and a conductivity increase of a factor of 3.2 after delay. We then used THz time-domain spectroscopy to measure this conductivity immediately after photoexcitation, which showed no large difference, and at longer pump-probe delays, where the expected difference was not resolvable.`; 
  
  
  const abstract3 = `Our results, along with previous works, suggest that highly electronegative fluorine groups in P(VDF-TrFE) passivate sulfur vacancies in the MoS2 film, leading to higher mobility and reduced electron-hole recombination frequency. These results show promise for P(VDF-TrFE) as a passivation layer over other polymers to improve future photodetector performance. Future research will involve fabrication of FET devices to further quantify charge mobility effects due to passivation and investigation into poled P(VDF-TrFE) to determine effects of a static electric field on charge dynamics in MoS2.`;


  UIkit.use(Icons)

  const resumeURL = data.allFile.nodes[0].publicURL || "";

  const img_fnames = ["device_growth.png", "devicebw.png", "trfe_pl.png", "trts_data.png"];

  return (
    <div>
      <Seo />
      <SmallHeader title={"Polymer Passivation of 2D TMDs"}/>

      <div className="uk-container uk-width-3-4 uk-width-3-5@l">
        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>Abstract</h2>
            
            <p className="uk-text-justify">{ abstract1 }</p>
            <p className="uk-text-justify">{ abstract2 }</p>
            <p className="uk-text-justify uk-margin-small">{ abstract3 }</p>

            <div className="uk-grid uk-margin-large">
              <figure>
                <StaticImage width={300} height={300}
                  className="uk-padding"
                  src={"../images/mos2/devicebw.png"}/>
                  <figcaption className="uk-padding-small uk-padding-remove-left">
                    <i>MoS2 FET Device</i>
                  </figcaption>
              </figure>
              <figure>
                <StaticImage width={300} height={300}
                  className="uk-padding"
                  src={"../images/mos2/device_growth.png"}/>
                  <figcaption className="uk-padding-small uk-padding-remove-left">
                    <i>Partially Grown MoS2 PL</i>
                  </figcaption>
              </figure>
              <figure>
                <StaticImage width={300} height={300}
                  className="uk-padding"
                  src={"../images/mos2/trfe_pl.png"}/>
                  <figcaption className="uk-padding-small uk-padding-remove-left">
                    <i>P(VDF-TrFE) Coated MoS2 PL</i>
                  </figcaption>
              </figure>
              <figure>
                <StaticImage width={300} height={300}
                  className="uk-padding"
                  src={"../images/mos2/trts_data.png"}/>
                  <figcaption className="uk-padding-small uk-padding-remove-left">
                    <i>Time-Resolved THz Spectroscopy</i>
                  </figcaption>
              </figure>
            </div>

            <h5 className="uk-margin-remove@s uk-margin-small">
              This work was supported in part by the NIST Summer Undergraduate Research Fellowship.
            </h5>

          </div>
        </section>

        <section>
          <div className="maintext uk-margin">
            

            
          </div>
        </section>

      
      
      </div>
      <footer className="post-footer uk-height-small uk-flex uk-flex-center uk-flex-middle">
        <div className="uk-text-center">
          <h4 className="uk-margin-remove footer-name">DANIEL HARRINGTON</h4>
          <a className="uk-link-text footer-sub" href="https://github.com/dmharrington03/portfolio"
          target="_blank" rel="noreferrer">View this site's code on Github
          </a>
        </div>
      </footer>
    </div>
  )
}

export default MoS2Research;

export const Head = () => {
  return (
    <Seo />
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {base: {eq: "DanielHarrington_Resume.pdf"}}) {
      nodes {
        publicURL
      }
    }
  }
`