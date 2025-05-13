import React from 'react';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import QuickActions from './QuickActions';
import BusinessDetailsForm from './BusinessDetailsForm';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6b46c1',
    },
    secondary: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function MainSidebar() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
          <ProfileHeader />
          <QuickActions />
          <BusinessDetailsForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default MainSidebar;