import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.scss'

const SideBar = ({className, ports, toggleCruise, togglePort, showCruise, showPort}) => {
  const portsCollection = ports.map((port) => {
    return <div key={port.id}>
      <p>
        {port.name}
      </p>
    </div>
  });
  return (
    <div className={className}>
      <button onClick={() => toggleCruise()}>{showCruise ? "Hide Cruise" : "Show Cruise"}</button>
      <button onClick={() => togglePort()}>{showPort ? "Hide Ports" : "Show Ports"}</button>
      {portsCollection}
    </div>
  )
};

SideBar.propTypes = {
  className: PropTypes.string,
  ports: PropTypes.array.isRequired,
  toggleCruise: PropTypes.func
};

export default SideBar;
