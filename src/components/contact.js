import * as React from "react"

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

const Contact = () => {
  return (
    <ul class="uk-iconnav uk-iconnav-vertical">
      <li><a href="https://github.com/dmharrington03" target="_blank" rel="noopener noreferrer">
        <span className="uk-icon soc" uk-icon="icon: github; ratio: 1.5"></span><code>@dmharrington03</code>
      </a></li>
      <li><a href="https://www.linkedin.com/in/dmharrington03/" target="_blank" rel="noopener noreferrer"><span className="uk-icon soc" uk-icon="icon: linkedin; ratio: 1.5"></span><code>@dmharrington03</code></a></li>
      <li><a href="mailto: dmharrington03@gmail.com" target="_blank" rel="noopener noreferrer"><span className="uk-icon soc" uk-icon="icon: mail; ratio: 1.5"></span><code>dmharrington03@gmail.com</code></a></li>
    </ul>
  );
};

export default Contact;