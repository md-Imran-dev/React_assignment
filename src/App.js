import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./pages/Dashboard";
import AppThemeProvider from "./styles/ThemeProvider";
import { ThemeProvider } from "./context/ThemeContext";
import CardDashboard from "./updatedUI/CardDashboard.js";
function App() {
  return (
    <ThemeProvider>
      <AppThemeProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/carddashboard" element={<CardDashboard />} />
          </Routes>
        </BrowserRouter>
      </AppThemeProvider>
    </ThemeProvider>
  );
}

export default App;
