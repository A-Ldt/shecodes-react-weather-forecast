import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="weather-app-city">{props.data.city}</h1>
          <ul className="weather-app-details">
            <li>
              <FormattedDate date={props.data.date} />,{" "}
              {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="weather-app-temperature-container justify-content-end">
            <WeatherIcon code={props.data.icon} size={120} />
            <div>
              <span className="weather-app-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="weather-app-unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
