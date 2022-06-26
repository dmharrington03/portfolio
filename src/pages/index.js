import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import MediumCaption from "../components/mediumcaption"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const images = data.allFile.nodes

  const bio = "Hello! I am an undergraduate physics student at Tufts University. I am interested in learning about condensed matter and high energy physics, specifically the design and engineering of experimental equipment."

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
      </div>
      <br />

      <div className="uk-container uk-width-3-4 uk-width-1-2@l">
        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>MY PROJECTS</h2>
            <h3 className="uk-margin">DATA SCIENCE</h3>

            <div className="uk-flex uk-flex-column">
              {posts.map((post) => {
                const title = post.frontmatter.title || post.fields.slug;
                const imgMatch = images.find((node) => post.frontmatter.title === node.name);
                return (
                  <MediumCaption 
                  source={ imgMatch ? imgMatch.publicURL : "" }
                  title={ post.frontmatter.description || 'error' }
                  caption={ post.html }
                  />)
                })
              }
            </div>

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
    allMarkdownRemark(filter: {frontmatter: {title: {glob: "M-**"}}}) {
      nodes {
        id
        frontmatter {
          title
          description
        }
        html
        fields {
          slug
        }
      }
    }
    allFile(filter: {relativeDirectory: {glob: "project*"}, extension: {in: ["jpg", "png"]}}) {
      nodes {
        publicURL
        name
      }
    }
  }
`




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