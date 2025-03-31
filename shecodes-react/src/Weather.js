import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1a5a5a587ed7ec28adfb421a12a5576d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            className="enter"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            value="Search"
            className="search-button"
          />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/A-Ldt" target="_blank" rel="noopener noreferrer">
            Alina Linscheidt
          </a>{" "}
          and is{" "}
          <a href="https://github.com/A-Ldt/shecodes-react-weather-forecast" target="_blank" rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>.
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}