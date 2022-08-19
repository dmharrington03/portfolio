import * as React from 'react';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

const ViewOnGithub = ({url}) => {
  
  return (
      <a href={url} target="_blank" rel="noreferrer" 
      className="uk-icon-button" data-uk-icon="icon: github; ratio: 2"></a>
  );
};

export default ViewOnGithub;