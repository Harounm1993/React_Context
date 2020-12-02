import React, { createContext, useContext, useState } from "react";

import { theme } from "./theme";

const ThemeContext = createContext(theme.light);

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <ThemeContext.Provider
      value={[theme[isDarkMode ? "dark" : "light"], toggleTheme]}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
