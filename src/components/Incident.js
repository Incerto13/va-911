import React, { Component } from "react";
import getIncident from "../api/incidentApi";
import MapContainer from "./MapContainer";

class Incident extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      city: "",
      latitude: 0,
      longitude: 0,
      weather: "",
      parcel: ""
    };

    this.loadIncident = this.loadIncident.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  loadIncident() {
    getIncident("address")
      .then(address => {
        this.setState({
          address: address["address_line1"],
          city: address["city"],
          longitude: address["longitude"],
          latitude: address["latitude"]
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

    console.log(`getWeather() function was launched and cit is... ${city}`);

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
    const coords = {
      lng: this.state.longitude,
      lat: this.state.latitude
    };
    console.log(coords);
    console.log(this.state.longitude);
    console.log(this.state.weather);
    return (
      <>
        <h1 className="jumbotron">RichMond, VA 911 Incident Validation</h1>
        <MapContainer initialCenter={coords} />
      </>
    );
  }
}

export default Incident;
