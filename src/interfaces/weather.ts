export interface WeatherParams {
  name: string;
  main: MainWeatherParams;
  weather: CloudParams;
}

export interface MainWeatherParams {
  temp: number;
  feels_like: number;
  humidity: number;
}

export interface CloudParams {
  description: string;
  icon: string;
}
