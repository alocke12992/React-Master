import React from 'react';
import HarborView from './HarborView';
import './detailsView.scss';

const DetailsView = ({port, unsetPort}) => (
  <div className="mainContent">
    <div className="harborDetails">
      <button onClick={() => unsetPort()}>Back</button>
      <h1>{port.name}</h1>
    </div>
    <HarborView port={port} className="harborView"/>
  </div>
)

export default DetailsView