import Card from "../card/card";
import { PhotoInfo } from "../../interfaces/card";
import "./card-list.styles.css";

interface CardListProps {
  photos: PhotoInfo[];
}

const CardList = (props: CardListProps) => {
  const { photos } = props;
  return (
    <div className="card-grid">
      {photos.map((photo, index) => (
        <Card key={index} cardData={photo} />
      ))}
    </div>
  );
};

export default CardList;
