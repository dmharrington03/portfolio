import React from "react"
import UIkit from "uikit"

const SquareCaption = ({imgURL, title, description}) => {

  return (
    <div>
      <div className="uk-flex uk-flex-column uk-flex-between uk-width-1-1 pointer">
        <div data-uk-toggle={"target: " + '#' + title.replace(/\s+/g, '')}>
          <img src={imgURL} alt={title} className="click-img uk-width-5-6 uk-width-1-1@s"/>
        </div>
        <h4 className="uk-margin-small"><b><i>{title}</i></b></h4>
      </div>
      <div id={title.replace(/\s+/g, '')} data-uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-width-5-6 uk-width-2-3@s" data-uk-overflow-auto>
          <h2 class="uk-modal-title">{title}</h2>
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