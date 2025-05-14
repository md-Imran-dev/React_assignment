import React, { useState } from "react";
import Header from "../components/layout/Header";
import MainSidebar from "../components/layout/sidebar/MainSidebar";
import { Outlet } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import OrderStatusChart from "../components/layout/orders/OrderStatusChart";
import RecentActivities from "../components/layout/activity/RecentActivities";
import RecentOrders from "../components/layout/orders/RecentOrders";
import RevenueDashboard from "../components/layout/dashboardmain/RevenueDashboard";
import styled from 'styled-components';
import DemoDashboard from "../components/demoDashboard/DemoDashboard";

const DashboardContainer = styled(Box)`
  background-color: ${props => props.theme.colors.background.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled(Box)`
  flex-grow: 1;
  padding-left: ${props => props.theme.spacing(3)};
  padding-right: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.background.card};
  border-left: 1px solid ${props => props.theme.colors.border.card};
  overflow-x: hidden;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  margin-top: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const tabs = ['Dashboard', 'Orders', 'Address', 'Notes', 'Tasks', 'Contacts', 'Credit History'];

  return (
    <DashboardContainer>
      <Header />
      <Box display="flex" sx={{ flex: 1, padding: '16px 16px 0 16px', overflow: 'hidden' }}>
        <MainSidebar />
        <Box display="flex" flexDirection="column" sx={{ flexGrow: 1, width: '100%', overflow: 'hidden' }}>
          <div>
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ zIndex: activeTab === tab ? 2 : 1 }}
              >
                {tab}
              </button>
            ))}
          </div>
          <ContentWrapper>
            <DemoDashboard />
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <OrderStatusChart />
              </Grid>
              <Grid item xs={12} md={5}>
                <RecentActivities />
              </Grid>
            </Grid>

            <StyledContainer maxWidth="xl">
              <RecentOrders />
            </StyledContainer>

            <StyledContainer maxWidth="xl">
              <RevenueDashboard />
            </StyledContainer>

            <Outlet />
          </ContentWrapper>
        </Box>
      </Box>
    </DashboardContainer>
  );
};

export default Dashboard;