import * as React from "react"

const MNIST = ({ data, location }) => {

  return (
    <div>
      <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-height-viewport" data-uk-height-viewport="offset-bottom: 100px">
        {/* <LoadableP5 sketch={sketch} getData={getData}/> */}
        <h1>Work in Progress</h1>
        <p className="uk-margin-remove-bottom">Press space to clear board, up/down to change pen size, enter to submit</p>

        {/* <pre>{guess}</pre> */}
        <p className="uk-margin-remove-top">(numbers are hard)</p>
        <p className="uk-text-meta"><i>Mobile not currently supported</i></p>
      </div>

    </div>
  )
}

export default MNIST;