import React from 'react';
import PropTypes from 'prop-types';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import SideBar from 'components/SideBar';
import ApiService from '../../../services/api.service';

class HomeView extends React.Component {

  render() {
    const {ports, updatePorts} = this.props
    return (
      <div className="mainWrapper">
        <SideBar className="sideBar" ports={ports} />
        <div className="mapWrapper">
          <h4>Port Map</h4>
          <PortMap className="home--portMap" updatePorts={updatePorts} />
        </div>
      </div>
    )
  }
}

export default HomeView;
