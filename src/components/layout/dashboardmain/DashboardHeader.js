import React from 'react';
import { Container } from '@mui/material';
import NavigationTabs from './NavigationTabs';
import MetricsGrid from './MetricsCarousel';
import styled from 'styled-components';

const HeaderContainer = styled(Container)`
  margin-bottom: 32px;
`;

const HeaderCard = styled.div`
  background-color: white;
  border-radius: 0;
  padding: 24px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
`;

const DashboardHeader = () => {
  return (
    <HeaderContainer maxWidth="xl">
      <HeaderCard>
        <NavigationTabs />
        <MetricsGrid />
      </HeaderCard>
    </HeaderContainer>
  );
};

export default DashboardHeader;