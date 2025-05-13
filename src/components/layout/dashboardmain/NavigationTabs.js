import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import styled from 'styled-components';

const TabsContainer = styled(Box)`
  width: 100%;
  background-color: ${props => props.theme.colors.background.paper};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

const StyledTabs = styled(Tabs)`
  min-height: 48px;
  .MuiTabs-indicator {
    display: none;
  }
`;

const StyledTab = styled(Tab)`
  text-transform: none;
  min-width: 0;
  padding: ${props => `${props.theme.spacing(3)} ${props.theme.spacing(4)}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-right: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.text.primary.dark};
  font-weight: ${props => props.theme.typography.fontWeights.normal};
  
  &.Mui-selected {
    color: ${props => props.theme.colors.primary.main};
    font-weight: ${props => props.theme.typography.fontWeights.medium};
    background-color: ${props => `${props.theme.colors.primary.main}1A`}; // 10% opacity
  }
`;

const HighlightedTab = styled(StyledTab)`
  border: 2px dashed ${props => props.theme.colors.primary.main};
  position: relative;
  
  &::after {
    content: "92 Hug × 22 Hug";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${props => props.theme.typography.fontSizes.xs};
    color: ${props => props.theme.colors.primary.main};
    white-space: nowrap;
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
        <HighlightedTab label="Credit History" />
      </StyledTabs>
    </TabsContainer>
  );
};

export default NavigationTabs;