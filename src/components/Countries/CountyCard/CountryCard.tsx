import "./CountryCard.scss";
import { useThemeContext } from "../../../contexts/themeContext";
import { CountryType } from "../../../services/countriesService";

type CountryProps = {
  country: CountryType;
};
const CountryCard = (props: CountryProps) => {
  const theme = useThemeContext();
  const country = props.country;
  return (
    <div
      className={theme === "dark" ? "country-card-dark" : "country-card-light"}
    >
      <img src={country.flag} alt="flag" id="flag" />
      <div className="text">
        <h1>{country.commonName}</h1>
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
