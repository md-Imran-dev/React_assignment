import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TimerIcon from '@mui/icons-material/Timer';
import LoopIcon from '@mui/icons-material/Loop';

const CardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  minWidth: 220,
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2,
}));

const IconContainer = styled(Avatar)(({ color }) => ({
  backgroundColor: color || '#f5f5f5',
  width: 40,
  height: 40,
  padding: 8,
}));

const TrendIndicator = styled(Box)(({ trend }) => ({
  display: 'flex',
  alignItems: 'center',
  color: trend === 'up' ? '#4caf50' : '#f44336',
  marginTop: 8,
  fontSize: '0.875rem',
}));

const getIconComponent = (title) => {
  switch (title) {
    case 'Total Orders':
      return <ShoppingBagIcon style={{ color: '#ff7043' }} />;
    case 'Total Taken':
      return <LocalMallIcon style={{ color: '#ec407a' }} />;
    case 'Total Revenue':
      return <AttachMoneyIcon style={{ color: '#26a69a' }} />;
    case 'Pending Orders':
      return <TimerIcon style={{ color: '#7e57c2' }} />;
    case 'Pending Returns':
      return <LoopIcon style={{ color: '#ec407a' }} />;
    default:
      return <ShoppingBagIcon />;
  }
};

const MetricCard = ({ title, value, trendValue, trendDirection, period }) => {
  return (
    <CardContainer elevation={0}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconContainer 
          color={title === 'Total Orders' ? '#fff8e1' : 
                title === 'Total Taken' ? '#fce4ec' : 
                title === 'Total Revenue' ? '#e0f2f1' :
                title === 'Pending Orders' ? '#ede7f6' : '#fce4ec'}
        >
          {getIconComponent(title)}
        </IconContainer>
        <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      
      <Typography variant="h4" component="div" fontWeight="bold">
        {value}
      </Typography>
      
      <TrendIndicator trend={trendDirection}>
        {trendDirection === 'up' ? 
          <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} /> : 
          <TrendingDownIcon fontSize="small" sx={{ mr: 0.5 }} />
        }
        <Typography variant="body2" component="span">
          {trendValue} From The {period}
        </Typography>
      </TrendIndicator>
    </CardContainer>
  );
};

export default MetricCard;