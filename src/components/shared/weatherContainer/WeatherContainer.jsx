import React from "react";

import "./weatherContainer.css";

const WeatherContainer = ({ searchLocation, setData, data }) => {
  return (
    <div className="weather-app-container">
      <div className="weather-app-container-top">
        <div className="top-location">
          <p>{data.name}</p>
        </div>
        <div className="top-temparature">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="top-description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>

      {data.name !== undefined && (
        <div className="weather-app-container-bottom">
          <div className="bottom-feelslike">
            {data.main ? (
              <p className="bottom-feelslike-value">
                {data.main.feels_like.toFixed()}°C
              </p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="bottom-humidity">
            {data.main ? (
              <p className="bottom-humidity-value">{data.main.humidity}%</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className="bottom-wind">
            {data.wind ? (
              <p className="bottom-wind-value">
                {data.wind.speed.toFixed()} KMPH
              </p>
            ) : null}
            <p>Wind</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherContainer;
