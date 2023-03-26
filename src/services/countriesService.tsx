export type CountryType = {
  commonName: string;
  official: string;
  population: number;
  currencies: string[];
  languages: string[];
  region: string;
  subRegion: string;
  capital: string;
  borderCountries: string[];
  tld: string;
  flag: string;
};
export const fetchCountries = async (filter?: string) => {
  let endpoint;
  return new Promise((resolve) => setTimeout(resolve, 4000)).then(async () => {
    if (typeof filter === "undefined" || filter === "")
      endpoint = "https://restcountries.com/v3.1/all";
    else endpoint = "https://restcountries.com/v3.1/name/" + filter;
    console.log(endpoint);
    const countries: CountryType[] = [];
    try {
      const response = await fetch(endpoint);
      if (!response.ok) return [];
      const data = await response.json();
      for (let item of data) {
        let languages = [];
        for (let lang in item.languages) languages.push(item.languages[lang]);
        let currencies = [];
        for (let curr in item.currencies)
          currencies.push(item.currencies[curr].name);
        let borderCountries = [];
        for (let border in item.borders)
          borderCountries.push(item.borders[border]);
        let country = {
          commonName: item.name.common,
          official: item.name.official,
          tld: item.tld,
          languages: languages,
          population: item.population,
          currencies: currencies,
          region: item.region,
          subRegion: item.subregion,
          capital: item.capital,
          borderCountries: borderCountries,
          flag: item.flags.png,
        } as CountryType;
        countries.push(country);
      }
      return countries;
    } catch (e) {
      alert(e);
    }
  });
};
