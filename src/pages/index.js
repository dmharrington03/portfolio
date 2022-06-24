import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes



  return (
    <div>
      <Header />
      <div className="uk-container uk-width-1-2">
          <section>
            <div className="maintext uk-margin">
              <h2 className="hash">#</h2>
              <h2>ABOUT ME</h2>
              <p>Hello! I am an undergraduate physics student at Tufts University. I am interested in learning about condensed matter and high energy physics, specifically the design and engineering of experimental equipment. </p>
            </div>
          </section>
      </div>
      <br />
      <div className="uk-container uk-width-1-2">
        <section>
          <div className="maintext uk-margin">
            <h2 className="hash">#</h2>
            <h2>MY PROJECTS</h2>
            <p>Hello! I am an undergraduate physics student at Tufts University. I am interested in learning about condensed matter and high energy physics, specifically the design and engineering of experimental equipment. </p>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`


// <div className="uk-margin-large-bottom section">
//             <h2>MY PROJECTS</h2>
//             <section>
//               <h3>SOFTWARE</h3>
//               {/* For loop of projects */}
//               <div className="uk-flex">
//                 {posts.map((post) => {
//                   const title = post.frontmatter.title || post.fields.slug;
//                   // const imgMatch = images.find((node) => post.frontmatter.title === node.name);
//                   return (
//                     <div className="uk-card uk-card-default uk-card-body ">
//                       {title}
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>
//           </div>
