import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import { theme } from "../../theme";
import { ThemeProvider, useThemeContext } from "./themeContext";

const theme = useThemeContext(theme.light);

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
