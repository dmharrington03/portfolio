import * as React from 'react';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import ViewOnGithub from './viewongithub';


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

          <ViewOnGithub url={`https://github.com/dmharrington03/physics/tree/master/${post.frontmatter.description}`} />
        </div>
      </header>
  </div>;

  return out;
};

export default ArticleHeader;