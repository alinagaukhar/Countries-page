import "./Search.scss";
import { IconContext } from "react-icons/lib";
import { IoSearch } from "react-icons/io5";
import Filter from "./Filter/Filter";
import { useThemeContext } from "../../contexts/themeContext";
import { useCountriesContext } from "../../contexts/countriesContext";

const Search = () => {
  const { setSearchedCountry } = useCountriesContext();
  const theme = useThemeContext();
  const classNames =
    theme === "dark"
      ? "search-bar__form--icon search-bar__form--icon--dark"
      : "search-bar__form--icon";

  const searchTrigger = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCountry(e.target.value);
  };

  return (
    <div className="input-container">
      <IconContext.Provider
        value={{
          className: classNames,
        }}
      >
        <IoSearch />
      </IconContext.Provider>
      <input
        className={theme === "dark" ? "input-dark" : "input-light"}
        type="text"
        placeholder="Search for a country"
        onChange={searchTrigger}
      />
      <Filter />
    </div>
  );
};

export default Search;
