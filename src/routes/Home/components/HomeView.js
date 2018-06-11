import React from 'react';
import PropTypes from 'prop-types';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import SideBar from 'components/SideBar';
import HarborView from 'components/HarborView';
import ApiService from '../../../services/api.service';

class HomeView extends React.Component {
  state = {showCruise: true, showPort: true, portView: false, harborView: false, port: null}

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

  setPort = (port) => {
    if (this.state.port === null) {
      this.setState({port: port})
    } else {
      this.setState({port: null})
    }
  }

  render() {
    const {ports, updatePorts} = this.props
    const {showCruise, showPort, port} = this.state
    return (
      <div className="mainWrapper">
        <SideBar
          className="sideBar"
          ports={ports}
          toggleCruise={this.toggleCruise}
          togglePort={this.togglePort}
          showCruise={showCruise}
          showPort={showPort}
          setPort={this.setPort}
        />
        <div className="mapWrapper">
          {port ?
            <HarborView port={port} toggleView={this.setPort} />
            :
            <div>
              <h4>Port Map</h4>
              <PortMap
                className="home--portMap"
                updatePorts={updatePorts}
                showCruise={showCruise}
                showPort={showPort}
                port={port}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default HomeView;
