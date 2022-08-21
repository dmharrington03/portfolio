import * as React from 'react';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


const ArticleHeader = ({imgURL, post}) => {
  const bgStyle = {
    backgroundImage: `url('${ imgURL }')`,
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed'
  };

  UIkit.use(Icons)

  const out = 
  <div>
      <div className='banner-thin'></div>
      <div className="uk-background-cover uk-background-center article-bg
         uk-flex uk-flex-center uk-flex-middle" style={ bgStyle }></div>
      <a className="home-link" href="/">Back to Home</a>
      <header className="uk-flex uk-flex-middle uk-flex-column">

        <h1 className="uk-margin-top uk-text-center uk-width-auto article-head">{ post.frontmatter.title.toUpperCase() }</h1>
        <div className="uk-flex uk-flex-around uk-width-auto uk-width-1-3@s" data-uk-grid>

          <h4 className="uk-padding-remove"><i>{post.frontmatter.date}</i></h4>

          <a href={`https://github.com/dmharrington03/physics/tree/master/${post.frontmatter.description}`}
            className="uk-button uk-button-default uk-flex uk-flex-middle git-button uk-visible@s"
            target="_blank"
            rel="noreferrer"
          >
            <span data-uk-icon="github"></span>
            &nbsp;View on Github
          </a>
          <a href={`https://github.com/dmharrington03/physics/tree/master/${post.frontmatter.description}`}
            target="_blank"
            rel="noreferrer"
            className="uk-icon-link uk-hidden@s" 
            data-uk-icon="icon: github; ratio: 2"></a>
        </div>
      </header>
  </div>;

  return out;
};

export default ArticleHeader;