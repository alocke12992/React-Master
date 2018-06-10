import React from 'react';
import PropTypes from 'prop-types';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import SideBar from 'components/SideBar';
import ApiService from '../../../services/api.service';

class HomeView extends React.Component {
  state = {showCruise: true, showPort: true, portView: false}

  // Need to refactor these two functions into one 
  toggleCruise = () => {
    this.setState(state => {
      return {
        showCruise: !state.showCruise
      }
    })
  }

  togglePort = () => {
    this.setState(state => {
      return {
        showPort: !state.showPort
      }
    })
  }

  render() {
    const {ports, updatePorts} = this.props
    const {showCruise, showPort} = this.state
    return (
      <div className="mainWrapper">
        <SideBar
          className="sideBar"
          ports={ports}
          toggleCruise={this.toggleCruise}
          togglePort={this.togglePort}
          showCruise={showCruise}
          showPort={showPort}
        />
        <div className="mapWrapper">
          {this.state.portView ? null :
            <div>
              <h4>Port Map</h4>
              <PortMap
                className="home--portMap"
                updatePorts={updatePorts}
                showCruise={showCruise}
                showPort={showPort}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default HomeView;
