import * as React from 'react';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

const ViewOnGithub = ({url}) => {
  return (
    <div>
      <a href={url}
            className="uk-button uk-button-default uk-flex uk-flex-middle git-button uk-visible@s"
            target="_blank"
            rel="noreferrer"
          >
            <span data-uk-icon="github"></span>
            &nbsp;View on Github
          </a>
          <a href="#" className="uk-icon-link uk-hidden@s" data-uk-icon="icon: github; ratio: 2"></a>
    </div>
  );
};

export default ViewOnGithub;