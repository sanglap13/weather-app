import React from "react";

import "./weatherContainer.css";

const WeatherContainer = () => {
  return (
    <div className="weather-app-container">
      <div className="weather-app-container-top">
        <div className="top-location">
          <p>Kolkata</p>
        </div>
        <div className="top-temparature">
          <h1>30°C</h1>
        </div>
        <div className="top-description">
          <p>Sunny</p>
        </div>
      </div>
      <div className="weather-app-container-bottom">
        <div className="bottom-feelslike">
          <p className="bottom-feelslike-value">32°C</p>
          <p>Feels Like</p>
        </div>
        <div className="bottom-humidity">
          <p className="bottom-humidity-value">50%</p>
          <p>Humidity</p>
        </div>
        <div className="bottom-wind">
          <p className="bottom-wind-value">2 MPH</p>
          <p>Wind</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
