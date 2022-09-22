import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import Header from "../components/header"
import SmallSection from "../components/smallsection"
import SmallColumnSection from "../components/smallcolumnsection"
import MediumSection from "../components/mediumsection"
import SquareSection from "../components/squaresection"
// import LargeSection from "../components/largesection"
import Contact from "../components/contact"
import MediumSectionSplit from "../components/mediumsectionsplit"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const BlogIndex = ({ data, location }) => {

  const bio = "Hello! I'm Daniel, an undergraduate physics student at Tufts University. I am interested in pursuing condensed matter physics, specifically techniques relating to quantum computing theory and development, though I remain open and curious as I continue to learn and explore. I also plan to minor in computer science and mathematics. My goal is to use computing to supplement experimental and theoretical techniques to solve novel problems in physics. Outside of science, I love jazz and weightlifting. Read more about my work here or on my Github:"

  const research = "Currently, I am looking for a new internship/assistantship in any area of physics research, either for credit or experience."

  UIkit.use(Icons)


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

            {/* Text Section */}
            <h3 className="uk-margin-medium-top uk-margin-small-bottom">RESEARCH</h3>
            <h4 className="uk-margin-remove"><i>Open</i></h4>
            <p className="uk-margin-remove-top uk-margin-large-bottom">{ research }</p>
          </div>
        </section>

        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>MY PROJECTS</h2>
            <h3 className="h-primary">SOFTWARE</h3>
            
            {/* Small Section */}
            <h3 className="uk-margin">C++/SFML SIMULATIONS</h3>
            <SmallSection />
            <br />

            <h3 className="uk-margin">p5.JS SIMULATIONS</h3>
            <SmallColumnSection />
            <br />


            {/* Medium Caption Section */}
            <h3 className="uk-margin">DATA SCIENCE</h3>
            <MediumSection />

            {/* Square Section */}
            <h3 className="uk-margin">WEB DEVELOPMENT</h3>
            <SquareSection/>

            {/* Large Section
            <h3 className="uk-margin-top-large">PHYSICS</h3>
            <LargeSection /> */}

            <h3 className="h-primary">HARDWARE</h3>
            

            {/* Medium Split Section */}
            <h3 className="uk-margin-remove-top">ENGINEERING</h3>
            <MediumSectionSplit />
          </div>
        </section>
      
      
      </div>
      <footer className="post-footer uk-height-small uk-flex uk-flex-center uk-flex-middle">
        <div className="uk-text-center">
          <h4 className="uk-margin-remove">DANIEL HARRINGTON</h4>
          <a className="uk-link-text footer-sub" href="https://github.com/dmharrington03/portfolio"
          target="_blank" rel="noreferrer">View this site's code on Github</a>
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
  }
`