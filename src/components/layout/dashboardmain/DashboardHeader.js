import React from 'react';
import { Container } from '@mui/material';
import NavigationTabs from './NavigationTabs';
import MetricsCarousel from './MetricsCarousel';
import styled from 'styled-components';

const HeaderContainer = styled(Container)`
  margin-bottom: ${props => props.theme.spacing(3)};
`;

const HeaderCard = styled.div`
  background-color: ${props => props.theme.colors.background.paper};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing(3)};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;
`;

const DashboardHeader = () => {
  return (
    <HeaderContainer maxWidth="xl">
      <HeaderCard>
        <NavigationTabs />
        <MetricsCarousel />
      </HeaderCard>
    </HeaderContainer>
  );
};

export default DashboardHeader;