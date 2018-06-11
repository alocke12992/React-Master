import React from 'react'

const HarborView = ({port, toggleView}) => (
  <div>
    <button onClick={() => toggleView()}>Go back</button>
    <h3>{port.name}</h3>
  </div>
)

export default HarborView