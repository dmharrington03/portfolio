import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import Header from "../components/header"
import SmallSection from "../components/smallsection"
import SmallColumnSection from "../components/smallcolumnsection"
import PythonSection from "../components/pythonsection"
import MoS2ResearchSection from "../components/mos2researchsection"
import PhotonicsResearchSection from "../components/photonicsresearchsection"
import QSTResearchSection from "../components/qstresearchsection"
import MediumSection from "../components/mediumsection"
import SquareSection from "../components/squaresection"
// import LargeSection from "../components/largesection"
import "katex/dist/katex.min.css"
import katex from "katex"
import Contact from "../components/contact"
// import MediumSectionSplit from "../components/mediumsectionsplit"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const BlogIndex = ({ data, location }) => {

  const bio = "Hello! I'm Daniel, an undergraduate physics and math student at Tufts University. I'm interested in the broad areas of condensed matter and atomic/optical physics. I am looking to learn more about quantum computing, photonics, and ultracold atoms, as well as expand my general skillset and familiarity with physics. Outside of science, I love jazz and weightlifting. Read more about my work here or on my Github:"

  const research = "Currently, I am looking for an internship/assistantship in physics or applied math research, either for credit or experience."

  UIkit.use(Icons)
  var html = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    throwOnError: false
  });

  const resumeURL = data.allFile.nodes[0].publicURL || "";

  return (
    <div>
      <Seo />
      <Header />
      <div className="uk-container uk-width-3-4 uk-width-3-5@l">
        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>ABOUT ME</h2>
            <p>{ bio }</p>
            <h3 className="uk-margin-medium-top uk-margin-small-bottom">CONTACT</h3>

            <Contact />
            <h5 className="uk-margin-remove@s uk-margin-small">
              <a className="uk-link-text uk-icon-link" href={resumeURL}
                target="_blank" rel="noreferrer" download>
                <i>Resume&nbsp;</i>
              <span className="uk-icon dl-icon" data-uk-icon="download"></span>
              </a>
            </h5>

          </div>
        </section>

        <section>
          <div className="maintext uk-margin">
            
            {/* Research Section */}
            <h2 className="hash">#</h2>
            <h2>MY RESEARCH</h2>

            {/* <h3 className="uk-margin">INTEGRATED NEUTRAL ATOMS</h3> */}
            <h3 className="uk-margin">NANOPHOTONICS</h3>
            <PhotonicsResearchSection />

            <h3 className="uk-margin">QUANTUM STATE TOMOGRAPHY</h3>
            <QSTResearchSection />

            <h3 className="uk-margin">2D MATERIALS</h3>
            <MoS2ResearchSection />

            
          </div>
        </section>

        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>MY PROJECTS</h2>
            {/* <h4 className="h-primary">COURSEWORK</h4> */}

            {/* SVD Section */}
            {/* <div>
              <h4>Variational Characteristic of the Singular Value Decomposition:</h4>
              <div className="uk-flex uk-flex-center" dangerouslySetInnerHTML={{__html: 
                  katex.renderToString(String.raw`
                  \sigma_1 = \max_{\substack{
                    v \in \mathbb{R}^n, v\ne0 \\
                    w \in \mathbb{R}^m, w\ne0 }}
                    \frac{\langle w, Av \rangle}{{\langle w, w \rangle}^{1/2} {\langle v, v \rangle}^{1/2}}
                  `, {throwOnError: false, displayMode: true})
                }}>
                </div>

            </div> */}
            
            {/* Small Section */}
            <h3 className="uk-margin">C++/SFML SIMULATIONS</h3>
            <SmallSection />
            <br />
            
            {/* Python Section */}
            {/* <h3 className="uk-margin">PYTHON SIMULATIONS</h3>
            <PythonSection />
            <br /> */}

            <h3 className="uk-margin">p5.JS SIMULATIONS</h3>
            <SmallColumnSection />
            <br />


            {/* Medium Caption Section */}
            <h3 className="uk-margin">DATA SCIENCE</h3>
            <MediumSection />

            {/* Square Section */}
            {/* <h3 className="uk-margin">WEB DEVELOPMENT</h3>
            <SquareSection/> */}

            {/* Large Section
            <h3 className="uk-margin-top-large">PHYSICS</h3>
            <LargeSection /> */}

            {/* <h3 className="h-primary">HARDWARE</h3> */}
            

            {/* Medium Split Section */}
            {/* <h3 className="uk-margin-remove-top">ENGINEERING</h3>
            <MediumSectionSplit /> */}
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

export default BlogIndex;

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