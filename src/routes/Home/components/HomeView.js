import React from 'react';
import PropTypes from 'prop-types';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import SideBar from 'components/SideBar';
import DetailsView from 'components/DetailsView';

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
        { port ? 
        <div className="home--portMap">
          <DetailsView 
            port={port}
            unsetPort={this.setPort} 
          />
        </div>
          : 
          <div className="mapWrapper">
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
    )
  }
}

export default HomeView;
