import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import styled from 'styled-components';

const TabsContainer = styled(Box)`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
`;

const StyledTabs = styled(Tabs)`
  min-height: 48px;
  .MuiTabs-indicator {
    background-color: #513CCE;
    height: 2px;
  }
`;

const StyledTab = styled(Tab)`
  text-transform: none;
  min-width: 0;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  
  &.Mui-selected {
    color: #513CCE;
  }
`;

const NavigationTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabsContainer>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="navigation tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        <StyledTab label="Dashboard" />
        <StyledTab label="Orders" />
        <StyledTab label="Address" />
        <StyledTab label="Notes" />
        <StyledTab label="Tasks" />
        <StyledTab label="Contacts" />
        <StyledTab label="Credit History" />
      </StyledTabs>
    </TabsContainer>
  );
};

export default NavigationTabs;