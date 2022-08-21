import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = "Daniel Harrington";
  UIkit.use(Icons);

  return (
    <div>
      <Header />
      <div className="uk-container uk-flex uk-flex-center uk-flex-column uk-flex-middle">
        <pre className="uk-margin-small">Error 404</pre>
        <h3 className="uk-margin-small-top">page not found :/</h3>
        <a className="uk-link-text uk-margin-top" href="/">go home <span uk-icon="triangle-right"></span></a>
      </div>
    </div>
  )
}

export default NotFoundPage
