import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import SmallSection from "../components/smallsection"
import SmallColumnSection from "../components/smallcolumnsection"
import MediumSection from "../components/mediumsection"
import SquareSection from "../components/squaresection"
import LargeSection from "../components/largesection"
import Contact from "../components/contact"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const BlogIndex = ({ data, location }) => {

  const bio = "Hello! I\'m Daniel, an undergraduate physics student at Tufts University. I am interested in pursuing condensed matter physics, specifically quantum computing theory and development. I also plan to minor in computer science and mathematics. My goal is to use computing to supplement experimental and theoretical techniques to solve novel problems in physics. Outside of science, I love jazz and weightlifting. Read more about my work here or on my Github."

  const research = "Currently, I am looking for a new assistantship/internship in any area of physics research, either for credit or experience."

  UIkit.use(Icons)

  return (
    <div>
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

            <h3 className="uk-margin">p5 SIMULATIONS</h3>
            <SmallColumnSection />
            <br />


            {/* Medium Caption Section */}
            <h3 className="uk-margin">DATA SCIENCE</h3>
            <MediumSection />

            {/* Square Section */}
            <h3 className="uk-margin">WEB DEVELOPMENT</h3>
            <SquareSection/>

            {/* Large Section */}
            <h3 className="uk-margin-top-large">PHYSICS</h3>
            <LargeSection />
          </div>
        </section>
      
      
      </div>
      <footer className="post-footer uk-height-small uk-flex uk-flex-center uk-flex-middle">
        <h4 className="uk-margin-remove">DANIEL HARRINGTON</h4>
      </footer>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// allMarkdownRemark(filter: {frontmatter: {title: {glob: "M-**"}}}) {
//   nodes {
//     id
//     frontmatter {
//       title
//       description
//     }
//     html
//     fields {
//       slug
//     }
//   }
// }
// allFile(filter: {relativeDirectory: {glob: "project*"}, extension: {in: ["jpg", "png"]}}) {
//   nodes {
//     publicURL
//     name
//   }
// }


// allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//   nodes {
//     excerpt
//     fields {
//       slug
//     }
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       title
//       description
//     }
//   }
// }