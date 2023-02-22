// import axios from "axios";
import { PhotoInfo } from "../../interfaces/card";
import "./card.css";
interface CardProps {
  cardData: PhotoInfo;
}
export default function Card(props: CardProps) {
  const { title, authorName, imgSrc } = props.cardData;
  console.log(authorName);
  return (
    <>
      <figure>
        <img className="randomImg" src={imgSrc} />
        <figcaption>{title}</figcaption>
      </figure>
      <p>{authorName}</p>
    </>
  );
}
