import CountryCard from "./CountyCard/CountryCard";
import "./Countries.scss";
import { CountryType } from "../../services/countriesService";
import { useCountriesContext } from "../../contexts/countriesContext";
import { useEffect } from "react";
import Loading from "../Skeleton/Skeleton";
const Countries = () => {
  const { isLoading, data, filter, searchedCountry } = useCountriesContext();

  let displayedCountries = data ? [...data] : [];
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  if (data) {
    if (filter === "All" || filter === null)
      displayedCountries = data.filter((country: CountryType) =>
        country.commonName.toLowerCase().includes(searchedCountry.toLowerCase())
      );
    else
      displayedCountries = data
        .filter((country: CountryType) => country.region === filter)
        .filter((country: CountryType) =>
          country.commonName
            .toLocaleUpperCase()
            .includes(searchedCountry.toLowerCase())
        );
  }

  return (
    <div className="countries-grid">
      {isLoading &&
        Array.from(Array(10).keys()).map((index) => <Loading key={index} />)}
      {!isLoading &&
        displayedCountries.map((country: CountryType) => (
          <CountryCard key={country.commonName} country={country} />
        ))}
    </div>
  );
};

export default Countries;
