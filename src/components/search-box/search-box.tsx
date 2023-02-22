import { Search } from "../../interfaces/search-box";

export default function SearchBox({ onChangeHandler, placeholder }: Search) {
  return (
    <>
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
}
