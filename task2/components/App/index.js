import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Article from "../Article";
import {ThemeProvider, useThemeContext} from "../../themeContext"

import { siteTitle, conTitle, conText } from "../../constants";

import { theme } from "../../theme";

function App() {

 
const theme = useThemeContext
  return (
    <div className="main-container" style={theme.light}>
      <Header title={siteTitle}></Header>
      <Article title={conTitle} paragraphs={conText}></Article>
      <Footer></Footer>
    </div>
  );
}

export default App;
