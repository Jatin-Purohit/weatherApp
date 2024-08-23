import React from 'react';
import './Forecast.css';  

const Forecast = ({ data, unit }) => {
  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {data.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{day.date}</p>
            <img src={day.day.condition.icon} alt="weather icon" />
            <p>{day.day.avgtemp_c}° {unit === 'C' ? 'Celsius' : 'Fahrenheit'}</p>
            <p>{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
