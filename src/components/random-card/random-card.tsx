import Card from "../card/card";
import { PhotoInfo } from "../../interfaces/card";
import { useState, useEffect } from "react";
import axios from "axios";
import "./random-card.css";
import { galleryApiCofig } from "../../const/gallety-api-config";

export default function RandomCard() {
  const [cardInfo, setCardInfo] = useState({
    title: "",
    authorName: "",
    imgSrc: "",
  });

  const collectionsURL = "https://api.unsplash.com/photos/random";
  async function fetchData() {
    const response = await axios(collectionsURL, galleryApiCofig);
    const data = response.data;
    const newData: PhotoInfo = {
      title: data.tags[0].title,
      authorName: data.user.name,
      imgSrc: data.urls.regular,
    };
    setCardInfo(newData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="randomCard">
      <h2>random card</h2>
      <Card cardData={cardInfo} />
    </section>
  );
}
