import * as React from "react"
import { graphql } from "gatsby"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';
import * as tf from "@tensorflow/tfjs";
import { ReactP5Wrapper } from "react-p5-wrapper";

import sketch from "../models/display";


const MNIST = ({ data, location }) => {
  let model;
  const [guess, setGuess] = React.useState('?');
  // const [value, setValue] = React.useState('');

  (async () => {
    model = await tf.loadLayersModel('https://raw.githubusercontent.com/dmharrington03/portfolio/master/src/models/model.json');
  })();
  // const handler = tfn.io.fileSystem("../models/model.json");
  function getData(data) {

    let vals = tf.tensor(data.slice(1, data.length - 1).split(',').map(i => parseFloat(i)));
    let nvals = vals.reshape([28, 28]).transpose().reshape([1, 28*28]);
    let pred = model.predict(nvals);
    tf.argMax(pred, 1).array().then(a => 
      setGuess(a)
    );
  }

  return (
    <div>
      <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-height-viewport" data-uk-height-viewport="offset-bottom: 100px">
        <ReactP5Wrapper sketch={sketch} getData={getData}/>

        <pre>Guess: {guess}</pre>
      </div>

    </div>
  )
}

export default MNIST;