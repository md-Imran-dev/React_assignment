import React from 'react';
import { Box, Paper, Grid, Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const QuickActions = () => {
  return (
    <Paper elevation={0} sx={{ borderRadius: 3, my: 2, overflow: 'hidden' }}>
      <Grid container>
        <Grid item xs={3} sx={{ borderRight: '1px solid #eee' }}>
          <Button
            color="inherit"
            fullWidth
            sx={{
              py: 2, 
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <EmailIcon sx={{ mb: 0.5 }} />
            <Typography variant="caption">Email</Typography>
          </Button>
        </Grid>
        
        <Grid item xs={3} sx={{ borderRight: '1px solid #eee' }}>
          <Button
            color="inherit"
            fullWidth
            sx={{
              py: 2, 
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <PhoneIcon sx={{ mb: 0.5 }} />
            <Typography variant="caption">Call</Typography>
          </Button>
        </Grid>
        
        <Grid item xs={3} sx={{ borderRight: '1px solid #eee' }}>
          <Button
            color="inherit"
            fullWidth
            sx={{
              py: 2, 
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <MessageIcon sx={{ mb: 0.5 }} />
            <Typography variant="caption">Message</Typography>
          </Button>
        </Grid>
        
        <Grid item xs={3}>
          <Button
            color="inherit"
            fullWidth
            sx={{
              py: 2, 
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <CalendarTodayIcon sx={{ mb: 0.5 }} />
            <Typography variant="caption">Calendar</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QuickActions;