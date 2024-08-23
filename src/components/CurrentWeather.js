import React from 'react';
import './CurrentWeather.css'; 

const CurrentWeather = ({ data, unit }) => {
  return (
    <div className="current-weather">
      <h2>Current Weather in {data.location.name}</h2>
      <div className="weather-info">
        <div className="weather-icon">
          <img src={data.current.condition.icon} alt="weather icon" />
        </div>
        <div className="weather-details">
          <p>Temperature: {data.current.temp_c}° {unit === 'C' ? 'Celsius' : 'Fahrenheit'}</p>
          <p>Humidity: {data.current.humidity}%</p>
          <p>Wind Speed: {data.current.wind_kph} kph</p>
          <p>Description: {data.current.condition.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
