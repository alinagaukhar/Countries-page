import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Search from "./components/Seacrh/Search";
import Countries from "./components/Countries/Countries";
import { ThemeContext, ThemeType } from "./contexts/themeContext";
import { CountriesContextProvider } from "./contexts/countriesContext";

function App() {
  const [theme, setTheme] = useState<ThemeType>("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <CountriesContextProvider>
        <div className={theme === "dark" ? "app-dark" : "app-light"}>
          <Header setTheme={setTheme} />
          <Search />
          <Countries />
        </div>
      </CountriesContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
