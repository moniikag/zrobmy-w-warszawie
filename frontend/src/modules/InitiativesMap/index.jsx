import React, { Component } from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'

class InitiativesMap extends Component {

  renderMarkers() {
    return this.props.items.map(item =>
      <Marker
        key={`${item.lat}-${item.lng}-${item.name}`}
        onClick={this.props.showItem
          ? () => this.props.showItem(item.id)
          : undefined }
        position={{ lat: (item.lat || 52.229), lng: (item.lng || 21.0122) }}
      />
    )
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 52.2297, lng: 21.0122 }}
        onClick={this.props.handleMapOnClick
          ? (e) => this.props.handleMapOnClick(e)
          : undefined
        }
      >
        {this.renderMarkers()}
      </GoogleMap>
    )
  }
}

InitiativesMap.defaultProps = {
  items: [],
}

export default withScriptjs(withGoogleMap(InitiativesMap))
