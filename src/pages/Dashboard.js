import React, { useState } from "react";
import Header from "../components/layout/Header";
import MainSidebar from "../components/layout/sidebar/MainSidebar";
import { Outlet } from "react-router-dom";
import { Box, Container, Grid, Paper } from "@mui/material";
import OrderStatusCard from "../components/layout/orders/OrderStatusCard";
import RecentActivities from "../components/layout/activity/RecentActivities";
import RecentOrders from "../components/layout/orders/RecentOrders";
import RevenueDashboard from "../components/layout/dashboardmain/RevenueDashboard";
import styled from "styled-components";
import DemoDashboard from "../components/demoDashboard/DemoDashboard";
import Tabs from "../components/layout/Tabs";

const DashboardContainer = styled(Box)`
  background-color: ${(props) => props.theme.colors.background.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: ${(props) => props.theme.spacing(3)};
  padding-right: ${(props) => props.theme.spacing(3)};
  background-color: ${(props) => props.theme.colors.background.card};
  border: 1px solid ${(props) => props.theme.colors.border.card};
  overflow-x: hidden;
  width: 100%;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
`;

const StyledContainer = styled(Container)`
  margin-top: ${(props) => props.theme.spacing(4)};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const tabs = [
    "Dashboard",
    "Orders",
    "Address",
    "Notes",
    "Tasks",
    "Contacts",
    "Credit History",
  ];

  return (
    <DashboardContainer>
      <Header />
      <Box
        display="flex"
        sx={{ flex: 1, padding: "16px 16px 0 16px", overflow: "hidden" }}
      >
        <MainSidebar />
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ContentWrapper>
            <DemoDashboard />
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={2}
              sx={{ width: "100%" }}
            >
              <Box sx={{ flex: "1 1 calc(50% - 8px)", minWidth: "300px" }}>
                <OrderStatusCard />
              </Box>
              <Box sx={{ flex: "1 1 calc(50% - 8px)", minWidth: "300px" }}>
                <RecentActivities />
              </Box>
            </Box>
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
