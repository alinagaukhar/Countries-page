import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Filter.scss";
import { useThemeContext } from "../../../contexts/themeContext";
import { useCountriesContext } from "../../../contexts/countriesContext";

const Filter = (props: any) => {
  const theme = useThemeContext();
  const { setFilter } = useCountriesContext();

  const onSelect = (filter: any) => {
    setFilter(filter.value);
  };
  const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Dropdown
      className={theme === "dark" ? "dropdown-dark" : "dropdown-light"}
      options={options}
      onChange={onSelect}
      placeholder="Filter by Region"
    />
  );
};

export default Filter;
