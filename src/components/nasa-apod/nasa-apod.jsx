import axios from "axios";
import { useState, useEffect } from "react";

function NasaApod() {
  const nasaUrl =
    "https://api.nasa.gov/planetary/apod?api_key=PL5Z8wEDitGfaBgApq91Ks8FHegJLBONe6OJ7yF1";
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  // const [hdurl, setHdurl] = useState("");

  async function fetchData() {
    const response = await axios(nasaUrl);
    const title = response.data.title;
    const explanation = response.data.explanation;
    // const hdurl = response.date.hdurl;
    setTitle(title);
    setExplanation(explanation);
    console.log(response);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bgc">
      <h1>{title}</h1>
      <p>{explanation}</p>
    </div>
  );
}
export default NasaApod;
