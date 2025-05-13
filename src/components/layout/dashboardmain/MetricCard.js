import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TimerIcon from '@mui/icons-material/Timer';
import LoopIcon from '@mui/icons-material/Loop';

const CardContainer = styled(Paper)`
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background.card};
  border: 1px solid #e0e0e0;
  box-shadow: none;
`;

const CardHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const IconWrapper = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: ${props => props.bgcolor};
`;

const Title = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #666;
`;

const Value = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const TrendContainer = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const TrendValue = styled(Box)`
  display: flex;
  align-items: center;
  color: ${props => props.trend === 'up' ? '#22C55E' : '#E31D1C'};
  margin-right: 5px;
`;

const PeriodText = styled(Typography)`
  font-size: 12px;
  color: #666;
`;

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

const getIconBackground = (title) => {
  switch (title) {
    case 'Total Orders':
      return '#fff8e1';
    case 'Total Taken':
      return '#fce4ec';
    case 'Total Revenue':
      return '#e0f2f1';
    case 'Pending Orders':
      return '#ede7f6';
    case 'Pending Returns':
      return '#fce4ec';
    default:
      return '#f5f5f5';
  }
};

const MetricCard = ({ title, value, trendValue, trendDirection, period }) => {
  return (
    <CardContainer elevation={0}>
      <CardHeader>
        <IconWrapper bgcolor={getIconBackground(title)}>
          {getIconComponent(title)}
        </IconWrapper>
        <Title>{title}</Title>
      </CardHeader>
      
      <Value>
        {value}
      </Value>
      
      <TrendContainer>
        <TrendValue trend={trendDirection}>
          {trendDirection === 'up' ? 
            <TrendingUpIcon fontSize="small" style={{ marginRight: '2px' }} /> : 
            <TrendingDownIcon fontSize="small" style={{ marginRight: '2px' }} />
          }
          {trendValue}
        </TrendValue>
        <PeriodText>From The {period}</PeriodText>
      </TrendContainer>
    </CardContainer>
  );
};

export default MetricCard;