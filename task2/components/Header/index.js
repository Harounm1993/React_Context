import React from "react";
import { theme } from "../../theme";
function Header({ title }) {
  return (
    <header style={theme.light}>
      <h1>{title}</h1>
      <button onClick={() => console.log("theme should toggle!")}>
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;
