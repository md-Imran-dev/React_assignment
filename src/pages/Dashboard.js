import React from "react";
import Header from "../components/layout/Header";
import MainSidebar from "../components/layout/sidebar/MainSidebar";
import { Outlet } from "react-router-dom";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import DashboardHeader from "../components/layout/dashboardmain/DashboardHeader";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material/styles";
import OrderStatusChart from "../components/layout/orders/OrderStatusChart";
import RecentActivities from "../components/layout/activity/RecentActivities";
import RecentOrders from "../components/layout/orders/RecentOrders";
import RevenueDashboard from "../components/layout/dashboardmain/RevenueDashboard";
const theme = createTheme({
palette: {
primary: {
main: '#673ab7',
},
secondary: {
main: '#ff4081',
},
background: {
default: '#f5f7fa',
paper: '#ffffff',
},
},
typography: {
fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
},
components: {
MuiButton: {
styleOverrides: {
root: {
textTransform: 'none',
},
},
},
},
});

const Dashboard = () => {
return <div>
<ThemeProvider theme={theme}>
<Header/>
<Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
<MainSidebar/>
<Box flexGrow={1} p={3}>



    <Outlet/>
  </Box>

  <CssBaseline />
  <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 3 }}>
    <DashboardHeader />
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', }}>
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
  <Grid container spacing={3}>
    <Grid item xs={12} md={7}>
      <OrderStatusChart />
    </Grid>
    <Grid item xs={12} md={5}>
      <RecentActivities />
    </Grid>
  </Grid>
</Container>
</Box>
<Box sx={{ bgcolor: 'background.default', minHeight: '100vh',  }}>
    <Container maxWidth="xl">
      <RecentOrders />
    </Container>
  </Box>
  <Box sx={{ bgcolor: 'background.default', minHeight: '100vh',}}>
    <Container maxWidth="xl">
      <RevenueDashboard />
    </Container>
  </Box>
  </Box>



  </Box>

</ThemeProvider> 
 </div>;
};

export default Dashboard;