import React from 'react'
import L from 'leaflet';
import cruiseIcon from './assets/cruise.png';
import portIcon from './assets/port.png';
import classnames from 'classnames';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import findIndex from 'lodash/findIndex';

class HarborView extends React.Component {
  static propTypes  = {
    className: PropTypes.string.isRequired,
    port: PropTypes.object.isRequired
  }

  componentDidMount() {
    const element = findDOMNode(this);
    const {latitude, longitude} = this.props.port

    this._map = L.map(element, { trackResize: false }).setView({ lat: latitude, lng: longitude }, 7);

    // Add the basemap tile layer
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' +
          ', Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-streets-v10/tiles/256',
        accessToken: 'pk.eyJ1IjoiYnJhbmRvbmRldiIsImEiOiJjajFwNjNmODAwMDBnMzFwbDJ4N21yZmFmIn0.YC44JxjiM36-I54e-hVQUA'
      })
      .addTo(this._map);

    // Add the port/cruise layers
    this._icons = LAYER_DEFS.map(def => L.icon({
      iconUrl: def.icon,
      iconSize: [25, 25],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25],
    }));
    this._iconLayers = LAYER_DEFS.map(def => new L.LayerGroup());
    this._iconLayers.forEach(l => this._map.addLayer(l));

    this.createIcon();
  }

  createIcon = () => {
    const {type, latitude, longitude, name, city} = this.props.port;
    const harborType = findIndex(LAYER_DEFS, (L) => L.type === type)
    const layer = this._iconLayers[harborType]
    let icon = L
      .marker([latitude, longitude], {
        icon: this._icons[harborType]
      })
      .bindPopup(`<b>${name}</b><br>city: ${city}`);
    layer.addLayer(icon);
  }



  render(){
    const className = classnames("portmap--root", this.props.className);
    const {port} = this.props;
    return(
      <div>
        <button onClick={() => toggleView()}>Go back</button>
        <h3>{port.name}</h3>
        <div className={className} />
      </div>
    )
  }
}

const LAYER_DEFS = [
  { type: "port", icon: portIcon, name: "Ports" },
  { type: "cruise", icon: cruiseIcon, name: "Cruises" },
];

export default HarborView