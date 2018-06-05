import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({className, ports}) => {
  console.log('state', ports);
  const portsCollection = ports.map((port) => {
    return <div key={port.id}>
      <p>
        {port.name}
      </p>
    </div>
  });
  return (
    <div className={className}>
      {portsCollection}
    </div>
  )
};

SideBar.propTypes = {
  className: PropTypes.string,
  ports: PropTypes.array.isRequired
};

export default SideBar;
