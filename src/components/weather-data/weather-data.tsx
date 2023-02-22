import axios from "axios";
import { useState, useEffect } from "react";
import { WeatherParams } from "../../interfaces/weather";
function WeatherData() {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=56.5&lon=85&lang=ru&appid=4e06d6a0ebb465f07812720d4a60e7c1&units=metric`;

  const [data, setData] = useState<WeatherParams>({
    name: "",
    main: { temp: 0, feels_like: 0, humidity: 0 },
    weather: { description: "", icon: "" },
  });

  const [time, setTime] = useState<string>();

  const updateTime = () => {
    const time = new Date().toLocaleString();
    setTime(time);
  };

  useEffect(() => {
    axios.get(weatherUrl).then((response) => {
      const data = response.data;
      const newData = {
        name: data.name,
        main: {
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
        },
        weather: {
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        },
      };
      setData(newData);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  const formatData = (param: number) => {
    return Math.round(param);
  };
  const { name, main, weather } = data;
  const { temp, feels_like, humidity } = main;
  const { description, icon } = weather;

  return (
    <>
      <div className="city">
        <p>Времечко: {time} </p>
        <p>Город: {name}</p>
      </div>
      <div className="temp">
        <p>Температура: {formatData(temp)}°C</p>
      </div>
      <div className="feels">
        <p>Ощущается как: {formatData(feels_like)}°C</p>
      </div>
      <div className="humidity">
        <p>Влажность: {formatData(humidity)} %</p>
      </div>
      <div className="cloud">
        <p>Облачность: {description} </p>

        <figure>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        </figure>
      </div>
    </>
  );
}

export default WeatherData;
