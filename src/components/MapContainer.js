import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const myGoogleMapsApiKey = "AIzaSyBR7hB_livZqXHEe9wsSrq91eXIgS4yQe4";

const initialCenter = {
  lat: 40.6782,
  lng: -73.9442
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        className="map"
        google={this.props.google}
        initialCenter={initialCenter}
        zoom={10}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: myGoogleMapsApiKey
})(MapContainer);
