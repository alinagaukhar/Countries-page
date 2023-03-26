import React, { ReactNode, useContext, useState } from "react";
import { CountryType, fetchCountries } from "../services/countriesService";
import { useQuery } from "react-query";

interface AllCountriesContext {
  data?: CountryType[];
  isLoading: boolean;
  isError: boolean;
  filter: string | null;
  searchedCountry: string;
  setSearchedCountry: Function;
  setFilter: Function;
}

const defaultState = {
  data: [],
  isLoading: false,
  isError: false,
  filter: null,
  searchedCountry: "",
  setSearchedCountry: () => {},
  setFilter: () => {},
};
export const CountriesContext =
  React.createContext<AllCountriesContext>(defaultState);

export const useCountriesContext = () => useContext(CountriesContext);

export const CountriesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [filter, setFilter] = useState(null);

  const { isLoading, isError, data } = useQuery<CountryType[]>(
    "countriesInfos",
    async () => {
      const response = await fetchCountries();
      if (response === undefined) return [] as CountryType[];
      return response;
    }
  );
  return (
    <CountriesContext.Provider
      value={{
        isLoading,
        isError,
        data,
        filter,
        searchedCountry,
        setSearchedCountry,
        setFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
