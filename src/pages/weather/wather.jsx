import NasaApod from "../../components/nasa-apod/nasa-apod";
import WeatherData from "../../components/weather-data/weather-data";

export default function Weather() {
  return (
    <>
      <WeatherData />
      <NasaApod />
    </>
  );
}
