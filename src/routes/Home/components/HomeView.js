import React from 'react';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import SideBar from 'components/SideBar';

export const HomeView = (store) => (
  <div>
    <SideBar className="map__nav" ports={store.ports} />
    <h4>Port Map</h4>
    <PortMap className="home--portMap" updatePorts={store.updatePorts} />
  </div>
);

export default HomeView;
