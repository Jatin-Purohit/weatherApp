import React, { useState } from 'react';
import Header from './components/Header';
import WeatherInput from './components/WeatherInput';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('C');  
  const [error, setError] = useState('');

  const API_KEY = '3eb9a9475bb14c1790684157242308';

  const fetchWeatherData = async (cityName) => {
    try {
      const unitQuery = unit === 'C' ? 'metric' : 'imperial';
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`);
      setWeatherData(response.data);
      setError('');
    } catch (error) {
      setError('City not found. Please enter a valid city name.');
      setWeatherData(null);
      setForecastData(null);
    }
  };

  const fetchForecastData = async (cityName) => {
    try {
      const unitQuery = unit === 'C' ? 'metric' : 'imperial';
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=5`);
      setForecastData(response.data.forecast.forecastday);
      setError('');
    } catch (error) {
      setError('Unable to fetch forecast data.');
      setForecastData(null);
    }
  };

  const handleCitySearch = (cityName) => {
    setCity(cityName);
    fetchWeatherData(cityName);
    fetchForecastData(cityName);
  };

  const handleUnitToggle = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
    if (city) {
      fetchWeatherData(city);
      fetchForecastData(city);
    }
  };

  return (
    <div className="App">
      <Header />
      <WeatherInput onSearch={handleCitySearch} />
      <UnitToggle onToggle={handleUnitToggle} unit={unit} />
      {error && <p>{error}</p>}
      {weatherData && <CurrentWeather data={weatherData} unit={unit} />}
      {forecastData && <Forecast data={forecastData} unit={unit} />}
    </div>
  );
};

export default App;
