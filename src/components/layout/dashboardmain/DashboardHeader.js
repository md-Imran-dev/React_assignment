import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import NavigationTabs from './NavigationTabs';
import MetricsCarousel from './MetricsCarousel';

const DashboardHeader = () => {
  return (
    <Container maxWidth="xl">
      <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden', p: 3, mb: 3 }}>
        <NavigationTabs />
        <MetricsCarousel />
      </Paper>
    </Container>
  );
};

export default DashboardHeader;