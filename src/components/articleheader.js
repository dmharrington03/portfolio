import * as React from 'react';

const ArticleHeader = ({imgURL, post}) => {
  const bgStyle = {
    backgroundImage: `url('${ imgURL }')`,
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed'
  };

  const out = 
  <div>
      <div className='banner-thin'></div>
      <div className="uk-background-cover uk-background-top-left
          uk-height-large 
          uk-light uk-flex uk-flex-center uk-flex-middle" style={ bgStyle }></div>
      <a className="home-link" href="/">Back to Home</a>
      <header className="uk-flex uk-flex-middle uk-flex-column">
        <h1 className="uk-margin-top">{ post.frontmatter.title.toUpperCase() }</h1>
        <div className="uk-flex uk-flex-around uk-width-1-3" data-uk-grid>
          <h4 className=""><i>{post.frontmatter.date}</i></h4>
          <a href={`https://github.com/dmharrington03/physics/tree/master/${post.frontmatter.description}`}
            className="uk-button uk-button-default uk-flex uk-flex-middle git-button"
            target="_blank"
            rel="noreferrer"
          >
            <span data-uk-icon="github"></span>
            &nbsp;View on Github
          </a>
        </div>
      </header>
  </div>;

  return out;
};

export default ArticleHeader;