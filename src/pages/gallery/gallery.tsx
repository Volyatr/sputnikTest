import SearchBox from "../../components/search-box/search-box";
import RandomCard from "../../components/random-card/random-card";
import { PhotoInfo } from "../../interfaces/card";

import CardList from "../../components/card-list/card-list";
import axios from "axios";
import { galleryApiCofig } from "../../const/gallety-api-config";
import { useState } from "react";

export default function Gallery() {
  const [searchString, setSearchString] = useState("");
  const [cardInfo, setCardInfo] = useState([] as PhotoInfo[]);
  const [serchPresed, setSerchPresed] = useState(false);
  const onSearch = (e: { target: { value: string } }) => {
    setSearchString(e.target.value);
  };

  const fetchData = async (): Promise<void> => {
    const requestUrl = `https://api.unsplash.com/collections/${searchString}/photos?per_page=15`;
    const response = await axios(requestUrl, galleryApiCofig);
    const data = response.data;
    ``;
    const newData: PhotoInfo[] = data.map((photo: any) => {
      return {
        title: photo.description,
        authorName: photo.user.name,
        imgSrc: photo.urls.regular,
      };
    });
    setSerchPresed(true);
    setCardInfo(newData);
    console.log(data);
  };

  function renderCard() {
    if (serchPresed) {
      return <CardList photos={cardInfo} />;
    }
    return <RandomCard />;
  }

  return (
    <div className="gallery">
      <h1 className="gallery-title">galleries</h1>
      <SearchBox
        type={"search"}
        placeholder={"Введите id коллекции"}
        onChangeHandler={onSearch}
      />
      <button onClick={fetchData}>Найти</button>

      {renderCard()}
    </div>
  );
}
