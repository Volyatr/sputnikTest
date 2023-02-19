import SearchBox from "../../components/search-box/search-box";
import RandomCard from "../../components/random-card/random-card";
import CardList from "../../components/card-list/card-list";

export default function Gallery() {
  return (
    <div className="gallery">
      <h1 className="gallery-title">galleries rolodex</h1>
      <SearchBox />
      <RandomCard />
      <CardList />
    </div>
  );
}
