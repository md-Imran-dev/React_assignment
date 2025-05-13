import React from 'react';
import { Paper, Typography, Avatar } from '@mui/material';
import styled from 'styled-components';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TimerIcon from '@mui/icons-material/Timer';
import LoopIcon from '@mui/icons-material/Loop';

const CardContainer = styled(Paper)`
  padding: ${props => props.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  min-width: 220px;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.lg};
  background-color: ${props => props.theme.colors.background.paper};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const IconContainer = styled(Avatar)`
  background-color: ${props => props.bgcolor || props.theme.colors.gray['05']};
  width: 40px;
  height: 40px;
  padding: ${props => props.theme.spacing(2)};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

const Title = styled(Typography)`
  margin-left: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.text.secondary.dark};
  font-size: ${props => props.theme.typography.fontSizes.sm};
  font-weight: ${props => props.theme.typography.fontWeights.medium};
`;

const Value = styled(Typography)`
  font-size: ${props => props.theme.typography.fontSizes['2xl']};
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  color: ${props => props.theme.colors.text.primary.dark};
`;

const TrendIndicator = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.trend === 'up' ? 
    props.theme.colors.accent.green : 
    props.theme.colors.accent.red};
  margin-top: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.typography.fontSizes.sm};
`;

const TrendText = styled(Typography)`
  margin-left: ${props => props.theme.spacing(1)};
  font-size: ${props => props.theme.typography.fontSizes.sm};
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
      <HeaderContainer>
        <IconContainer bgcolor={getIconBackground(title)}>
          {getIconComponent(title)}
        </IconContainer>
        <Title variant="subtitle2">
          {title}
        </Title>
      </HeaderContainer>
      
      <Value variant="h4">
        {value}
      </Value>
      
      <TrendIndicator trend={trendDirection}>
        {trendDirection === 'up' ? 
          <TrendingUpIcon fontSize="small" /> : 
          <TrendingDownIcon fontSize="small" />
        }
        <TrendText variant="body2">
          {trendValue} From The {period}
        </TrendText>
      </TrendIndicator>
    </CardContainer>
  );
};

export default MetricCard;