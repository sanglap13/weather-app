import React, { useState } from "react";
import axios from "axios";
import { WeatherContainer } from "../../shared";

import "./home.css";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=94474bae40e9cc215d32366ad2df461e`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="home">
      <div className="search-city-name">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onClick={searchLocation}
          type="text"
          placeholder="Enter Location"
        />
      </div>
      <WeatherContainer />
    </div>
  );
};

export default Home;
