import React from 'react'

const ViewPort = ({togglePortView, port}) => (
  <div>
    <button onClick={() => togglePortView}>Go Back</button>
    This is a port
    {port.name}
  </div>
)

export default ViewPort