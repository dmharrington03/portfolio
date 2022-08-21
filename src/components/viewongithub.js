import * as React from 'react';

const ViewOnGithub = ({url}) => {
  
  return (
      <a href={url} target="_blank" rel="noreferrer" 
      className="uk-icon-button" data-uk-icon="icon: github; ratio: 2"></a>
  );
};

export default ViewOnGithub;