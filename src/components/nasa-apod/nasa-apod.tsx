import axios from "axios";
import { useState, useEffect } from "react";

function NasaApod() {
  const nasaUrl =
    "https://api.nasa.gov/planetary/apod?api_key=PL5Z8wEDitGfaBgApq91Ks8FHegJLBONe6OJ7yF1";
  const [data, setData] = useState({
    explanation: "",
    hdurl: "",
    title: "",
  });

  async function fetchData() {
    const response = await axios(nasaUrl);
    const data = response.data;
    const newData = {
      explanation: data.explanation,
      hdurl: data.hdurl,
      title: data.title,
    };
    setData(newData);
    console.log(data);
  }
  const { explanation, hdurl, title } = data;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bgc">
      <h1>{title}</h1>
      <p>{explanation}</p>
      <p>
        <img className="img" src={`${hdurl}`} />
      </p>
    </div>
  );
}
export default NasaApod;
