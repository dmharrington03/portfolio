import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import SmallSection from "../components/smallsection"
import MediumCaption from "../components/mediumcaption"
import MediumSection from "../components/mediumsection"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
  // const images = data.allFile.nodes

  const bio = "Hello! I am an undergraduate physics student at Tufts University. I am interested in learning about condensed matter and high energy physics, specifically the design and engineering of experimental equipment."

  UIkit.use(Icons)

  return (
    <div>
      <Header />
      <div className="uk-container uk-width-3-4 uk-width-1-2@l">
        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>ABOUT ME</h2>
            <p>{ bio }</p>
          </div>
        </section>
        <br />
        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>MY PROJECTS</h2>
            
            {/* Medium Caption Section */}
            <h3 className="uk-margin">DATA SCIENCE</h3>
            <MediumSection />

            {/* Small Section */}
            <h3 className="uk-margin">SIMULATIONS</h3>
            <SmallSection />
          </div>
        </section>
      
      
      </div>
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