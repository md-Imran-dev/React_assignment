import React from "react";
import Header from "../components/layout/Header";
import MainSidebar from "../components/layout/sidebar/MainSidebar";
import { Outlet } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import DashboardHeader from "../components/layout/dashboardmain/DashboardHeader";
import OrderStatusChart from "../components/layout/orders/OrderStatusChart";
import RecentActivities from "../components/layout/activity/RecentActivities";
import RecentOrders from "../components/layout/orders/RecentOrders";
import RevenueDashboard from "../components/layout/dashboardmain/RevenueDashboard";
import styled from 'styled-components';

const DashboardContainer = styled(Box)`
  background-color: ${props => props.theme.colors.background.main};
  min-height: 100vh;
`;

const ContentWrapper = styled(Box)`
  flex-grow: 1;
  padding: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.background.paper};
`;

const StyledContainer = styled(Container)`
  margin-top: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <Box display="flex" sx={{ padding: '16px 16px 0 16px' }}>
        <MainSidebar />
        <ContentWrapper>
          <DashboardHeader />
          
          <StyledContainer maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <OrderStatusChart />
              </Grid>
              <Grid item xs={12} md={5}>
                <RecentActivities />
              </Grid>
            </Grid>
          </StyledContainer>



          <StyledContainer maxWidth="xl">
            <RecentOrders />
          </StyledContainer>

          <StyledContainer maxWidth="xl">
            <RevenueDashboard />
          </StyledContainer>

          <Outlet />
        </ContentWrapper>
      </Box>
    </DashboardContainer>
  );
};

export default Dashboard;