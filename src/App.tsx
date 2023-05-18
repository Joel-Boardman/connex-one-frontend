import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Pages
import LandingPage from "./pages/LandingPage";

// CSS
import { GlobalStyle } from "./global/theme";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <GlobalStyle />
    </div>
  );
}

export default App;
