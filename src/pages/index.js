import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import SmallSection from "../components/smallsection"
import MediumSection from "../components/mediumsection"
import SquareSection from "../components/squaresection"
import LargeSection from "../components/largesection"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
  // const images = data.allFile.nodes

  const bio = "Hello! I am an undergraduate physics student at Tufts University. I am interested in learning about condensed matter and high energy physics, specifically the design and engineering of experimental equipment."

  const research = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"

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

            {/* Text Section */}
            <h3 className="uk-margin-medium-top uk-margin-small-bottom">RESEARCH</h3>
            <h4 className="uk-margin-remove"><i>RA, Peter Love Quantum Information Group, Tufts University</i></h4>
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