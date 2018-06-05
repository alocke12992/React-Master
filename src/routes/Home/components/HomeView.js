import React from 'react';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import SideBar from 'components/SideBar';

export const HomeView = (store) => (
  <div className="mainWrapper">
    <SideBar className="sideBar" ports={store.ports} />
    <div className="mapWrapper">
      <h4>Port Map</h4>
      <PortMap className="home--portMap" updatePorts={store.updatePorts} />
    </div>
  </div>
);

export default HomeView;
