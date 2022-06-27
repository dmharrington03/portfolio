import * as React from "react"
import { Link, graphql } from "gatsby"

import ArticleHeader from "../components/articleheader"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"
import "katex/dist/katex.min.css"
import katex from "katex"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  UIkit.use(Icons)

  return (
    <div>
      
      <ArticleHeader post={post} imgURL={data.file ? data.file.publicURL : ""}/>

      <div className="uk-container uk-margin-top">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article">
          
          
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
        </article>

        <nav className="blog-post-nav">
          <ul className="post-nav uk-flex uk-flex-between uk-flex-center uk-padding-remove">
            <li>
              {previous && (
                <a href={previous.fields.slug.replace(/\s+/g, '')} rel="prev"
                  className="uk-button uk-button-default uk-margin=bottom"
                  id="coolButton">
                  ← {previous.frontmatter.title}
                </a>
              )}
            </li>
            <li>
              {next && (
                <a href={next.fields.slug.replace(/\s+/g, '')} rel="next"
                  className="uk-button uk-button-default uk-margin=bottom"
                  id="coolButton">
                  {next.frontmatter.title} →
                </a>
              )}
            </li>
          </ul>
        </nav>

      </div>
      <footer className="post-footer uk-height-small uk-flex uk-flex-center uk-flex-middle uk-flex-column">
          <h5 className="uk-margin-remove">DANIEL HARRINGTON</h5>
      </footer>

    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $title: String
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    file(name: {eq: $title }) {
      publicURL
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
