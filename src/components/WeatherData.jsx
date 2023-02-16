import axios from "axios";
import React, { useState, useEffect } from "react";
function WeatherData() {
  // const apiKey = "4e06d6a0ebb465f07812720d4a60e7c1";
  // const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=db60c3687478412f84d135437231402&q=Tomsk&aqi=no`;

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=56.5&lon=85&lang=ru&appid=4e06d6a0ebb465f07812720d4a60e7c1&units=metric`;

  const [name, setName] = useState(null);
  useEffect(() => {
    axios.get(weatherUrl).then((response) => {
      setName(response.data.name);
    });
  }, []);
  const [mainInfo, setMainInfo] = useState("");
  useEffect(() => {
    axios.get(weatherUrl).then((response) => {
      setMainInfo(response.data.main);
    });
  }, []);
  const [clouds, setClouds] = useState("");
  useEffect(() => {
    axios.get(weatherUrl).then((response) => {
      setClouds(response.data.weather[0]);
    });
  }, []);

  if (!location) return null;
  return (
    <>
      <div className="city">
        <p>Город: {name}</p>
      </div>
      <div className="temp">
        <p>Температура: {Math.round(mainInfo.temp)}°C</p>
      </div>
      <div className="feels">
        <p>Ощущается как: {Math.round(mainInfo.feels_like)}°C</p>
      </div>
      <div className="humidity">
        <p>Влажность: {Math.round(mainInfo.humidity)} %</p>
      </div>
      <div className="cloud">
        <p>Облачность: {clouds.description}</p>
      </div>
    </>
  );
}

export default WeatherData;
