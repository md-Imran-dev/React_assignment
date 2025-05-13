import React, { useState } from 'react';
import { Box, Tabs, Tab, styled } from '@mui/material';

const StyledTabs = styled(Tabs)({
  minHeight: 48,
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  padding: '12px 16px',
  borderRadius: '4px',
  marginRight: '8px',
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
  '&.Mui-selected': {
    color: '#673ab7',
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: 'rgba(103, 58, 183, 0.1)',
  },
}));

const HighlightedTab = styled(StyledTab)(({ theme }) => ({
  border: '2px dashed #673ab7',
  position: 'relative',
  '&::after': {
    content: '"92 Hug × 22 Hug"',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '10px',
    color: '#673ab7',
    whiteSpace: 'nowrap',
  }
}));

const NavigationTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 3 }}>
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
    </Box>
  );
};

export default NavigationTabs;