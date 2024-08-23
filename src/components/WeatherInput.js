import React, { useState } from 'react';
import './WeatherInput.css';  

const WeatherInput = ({ onSearch }) => {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    if (cityName.trim() !== '') {
      onSearch(cityName);
    }
  };

  return (
    <div className="weather-input">
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
        className="city-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default WeatherInput;
