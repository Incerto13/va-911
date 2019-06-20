import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import icon from "../911-icon.png";

const mapBoxToken =
  "pk.eyJ1IjoiaW5jZXJ0bzEzIiwiYSI6ImNqeDNiZGdidDAxbmc0YXBsd3MyMzIyZzAifQ.B7xhQQxcGr2xUlSbDJP-Yg";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: this.props.coords.lat,
        longitude: this.props.coords.lng,
        zoom: 14,
        bearing: 0,
        pitch: 35,
        width: 1050,
        height: 300,
        mapboxApiAccessToken: mapBoxToken
      },
      marker: {
        lat: 0,
        lng: 0
      },
      incident_number: this.props.incident_number
    };
  }

  onViewportChange = viewport => {
    this.setState({ viewport });
  };

  // updates viewport coordinates once parent (Incident) updates w/ new coords
  componentWillReceiveProps(nextProps) {
    if (nextProps.coords !== this.props.coords) {
      const viewport = {
        ...this.state.viewport,
        longitude: nextProps.coords.lng,
        latitude: nextProps.coords.lat
      };
      this.setState({
        viewport,
        marker: {
          lat: nextProps.coords.lat,
          lng: nextProps.coords.lng
        },
        incident_number: nextProps.incident_number
      });
    }
  }

  render() {
    return (
      <div className="map">
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v11"
          {...this.state.viewport}
          onViewportChange={this.onViewportChange}
        >
          <div>
            <strong>Incident Number: </strong>
            {this.props.incident_number}
          </div>
          <Marker
            latitude={this.state.marker.lat}
            longitude={this.state.marker.lng}
            offsetLeft={-20}
            offsetTop={-70}
            draggable={false}
            captureScroll={true}
          >
            <img alt="" src={icon} />
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
