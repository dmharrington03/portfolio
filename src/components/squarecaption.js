import * as React from "react"

import ViewOnGithub from './viewongithub';

const SquareCaption = ({imgURL, title, description, ghURL}) => {

  return (
    <div className="uk-margin-bottom">
      <div className="uk-flex uk-flex-column uk-flex-between uk-width-1-1 pointer" 
        data-uk-toggle={`target: #${title.replace(/\s+/g, '')}`}>
        <img src={imgURL} alt={title} className="click-img uk-width-5-6 uk-width-1-1@s"/>
        <h4 className="uk-margin-small"><b><i>{title}</i></b></h4>
      </div>
      <div id={title.replace(/\s+/g, '')} data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body uk-width-5-6 uk-width-2-3@s" data-uk-overflow-auto>
          <div className="uk-flex uk-flex-between">
            <h2 className="uk-modal-title uk-margin-remove">{title}</h2>
            <ViewOnGithub url={ghURL} className=""/>
          </div>

          <hr />
          <button class="uk-modal-close-default" type="button" data-uk-close></button>
          <section className="sq-caption uk-margin-bottom" 
          dangerouslySetInnerHTML={{ __html: description }}></section>

          <p class="uk-text-right">
              <button class="uk-button uk-button-default uk-modal-close" type="button">Close</button>
          </p>
        </div>
      </div>
    </div>
    ) 
}

export default SquareCaption