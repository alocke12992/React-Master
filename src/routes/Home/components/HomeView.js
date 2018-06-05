import React from 'react';
import './HomeView.scss';
import PortMap from 'components/PortMap';

export const HomeView = () => (
  <div>
    <h4>Port Map</h4>
    <PortMap className="home--portMap" />
  </div>
);

export default HomeView;
