import React from "react";
import { Box, Container, Grid, Paper, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessDetails from "../components/layout/sidebar/BusinessDetailsForm";
import AccountHeader from "../components/account/AccountHeader";
import OrderStatusChart from "../components/layout/orders/OrderStatusChart";
import RecentActivities from "../components/layout/activity/RecentActivities";
import MetricCard from "../components/layout/dashboardmain/MetricCard";

// Icons
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

const TabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const AccountDetails = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <AccountHeader />
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Paper elevation={0} sx={{ borderRadius: 2, mb: 3 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              sx={{ px: 2 }}
            >
              <Tab label="Dashboard" />
              <Tab label="Orders" />
              <Tab label="Address" />
              <Tab label="Notes" />
              <Tab label="Tasks" />
              <Tab label="Contacts" />
              <Tab label="Credit History" />
            </Tabs>
          </Paper>

          <TabPanel>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <MetricCard
                  title="Total Orders"
                  value="123"
                  icon={<ShoppingBagIcon />}
                  iconColor="#ff9800"
                  trend="up"
                  trendValue="28%"
                  trendPeriod="Last Month"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MetricCard
                  title="Total Taken"
                  value="123"
                  icon={<ScheduleIcon />}
                  iconColor="#e53935"
                  trend="down"
                  trendValue="15%"
                  trendPeriod="Last Month"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MetricCard
                  title="Total Revenue"
                  value="123"
                  icon={<AttachMoneyIcon />}
                  iconColor="#4caf50"
                  trend="up"
                  trendValue="28%"
                  trendPeriod="Last Month"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MetricCard
                  title="Pending Orders"
                  value="$1234.99"
                  icon={<ShoppingBagIcon />}
                  iconColor="#9c27b0"
                  trend="up"
                  trendValue="28%"
                  trendPeriod="Last Month"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MetricCard
                  title="Pending Returns"
                  value="$1234.99"
                  icon={<AssignmentReturnIcon />}
                  iconColor="#f44336"
                  trend="up"
                  trendValue="28%"
                  trendPeriod="Last Month"
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} lg={7}>
                <OrderStatusChart />
              </Grid>
              <Grid item xs={12} lg={5}>
                <RecentActivities />
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountDetails;
