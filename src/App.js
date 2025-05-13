import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Header from "./components/layout/Header";
// import Dashboard from "./pages/Dashboard";
// import AccountDetails from "./pages/AccountDetails";
// import Orders from "./pages/Orders";
// import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#5e35b1",
//     },
//     secondary: {
//       main: "#f50057",
//     },
//     background: {
//       default: "#f5f7fa",
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <GlobalStyles />
    //   <Router>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //       <Route path="/crm/company" element={<AccountDetails />} />
    //       <Route path="/orders" element={<Orders />} />
    //     </Routes>
    //   </Router>
    // </ThemeProvider>
    <div>


     
    <Dashboard />


    </div>
  );
}

export default App;
