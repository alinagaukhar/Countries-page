import React, { useContext } from "react";

export type ThemeType = "light" | "dark";
export const ThemeContext = React.createContext<ThemeType>("light");

export const useThemeContext = () => useContext(ThemeContext);
