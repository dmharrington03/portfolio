import React from "react"

const SquareCaption = ({imgURL, title, description}) => {

  return (
    <div>
      <div className="uk-flex uk-flex-column uk-flex-between">
        <img src={imgURL} alt={title} className="sq-img uk-width-1-1"/>
        <h4 className="uk-margin-small"><b><i>{title}</i></b></h4>
        <section className="sq-caption uk-margin-bottom" 
          dangerouslySetInnerHTML={{ __html: description }}></section>
      </div>
    </div>
    ) 
}

export default SquareCaption