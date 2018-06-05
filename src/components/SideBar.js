import React from 'react'
import {connect} from 'react-redux'

class SideBar extends React.Component {

  render() {
    return (
      <div>
        Side Bar
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    porst: state.ports
  }
}

export default connect(mapStateToProps)(SideBar)
