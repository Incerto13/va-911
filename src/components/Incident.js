import React, { Component } from "react";
import getIncident from "../api/incidentApi";
import Map from "./Map";

class Incident extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      city: "",
      coords: {
        // initialize map in Brooklyn
        latitude: 40.6782,
        longitude: -73.9442
      },
      weather: "",
      parcel: "",
      place_name: "",
      comments: "",
      incident_number: "",
      summary: "",
      time_opended: ""
    };

    this.loadIncident = this.loadIncident.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  loadIncident() {
    getIncident("address")
      .then(address => {
        this.setState({
          address: address.address_line1,
          city: address.city,
          place_name: address.common_place_name,
          coords: {
            lat: address.latitude,
            lng: address.longitude
          }
        });
      })
      .catch(error => {
        console.log(error);
      });

    getIncident("description")
      .then(description => {
        this.setState({
          comments: description.comments,
          incident_number: description.incident_number,
          summary: description.subtype,
          time_opended: description.event_opened
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.loadIncident();
  }

  componentDidUpdate() {
    if (this.state.weather === "") {
      this.getWeather();
    }
  }

  getWeather() {
    const city = this.state.city;
    const apiKey = "6befa011b9a58b55a058613d57a609fa";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const temp = Math.round(data.main.temp);
        const maxTemp = Math.round(data.main.temp_max);
        const minTemp = Math.round(data.main.temp_min);
        const wind = Math.round(data.wind.speed);
        const description = data.weather[0].description;

        const weather = {
          description,
          temp,
          maxTemp,
          minTemp,
          wind
        };
        this.setState({
          weather
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    // Text formatting
    const incident_address = `${this.state.address}  ${this.state.city}, VA`;
    const weather_text = `It's ${this.state.weather.temp} degrees in ${
      this.state.city
    } with ${this.state.weather.description}.
          The expected high temp is ${
            this.state.weather.maxTemp
          } and expected low temp is ${this.state.weather.minTemp},
          with wind gusts up to ${this.state.weather.wind} mph.`;

    return (
      <>
        <div className="jumbotron">
          <h4 className="">Richmond, VA 911 Incident Validation</h4>
          <hr />
          <div className="details">
            <b>Incident Number</b>
            <p>{this.state.incident_number}</p>
            <b>Date & Time </b>
            <p>{this.state.time_opended}</p>
            <b>Location</b>
            <p>{this.state.place_name}</p>
            <b>Address</b>
            <p>{incident_address}</p>
            <b>Incident Type / Summary</b>
            <p>{this.state.summary}</p>
            <b>Notes / Description</b>
            <p>{this.state.comments}</p>

            <b>Weather:</b>
            <p>{weather_text}</p>
          </div>
        </div>
        <Map coords={this.state.coords} />
      </>
    );
  }
}

export default Incident;
