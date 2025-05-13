import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import MetricCard from './MetricCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: ${props => props.theme.spacing(2)} 0;
`;

const NavigationButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  min-width: 36px;
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.background.main};
  box-shadow: ${props => props.theme.shadows.sm};
  color: ${props => props.theme.colors.text.primary.dark};

  &:hover {
    background-color: ${props => props.theme.colors.gray['05']};
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const MetricCardWrapper = styled(Box)`
  flex: 0 0 auto;
  width: 85%;
  margin-right: ${props => props.theme.spacing(2)};
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 45%;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 22%;
  }
  
  max-width: 280px;
`;

const MetricsCarousel = () => {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  const metrics = [
    { 
      title: 'Total Orders', 
      value: '123', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month' 
    },
    { 
      title: 'Total Taken', 
      value: '123', 
      trendValue: '15%', 
      trendDirection: 'down', 
      period: 'Last Month' 
    },
    { 
      title: 'Total Revenue', 
      value: '123', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month' 
    },
    { 
      title: 'Pending Orders', 
      value: '$1234.99', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month' 
    },
    { 
      title: 'Pending Returns', 
      value: '$1234.99', 
      trendValue: '28%', 
      trendDirection: 'up', 
      period: 'Last Month' 
    }
  ];

  return (
    <CarouselContainer>
      <NavigationButton
        onClick={handleScrollLeft}
        className="left"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </NavigationButton>

      <CarouselContent ref={scrollRef}>
        {metrics.map((metric, index) => (
          <MetricCardWrapper key={index}>
            <MetricCard
              title={metric.title}
              value={metric.value}
              trendValue={metric.trendValue}
              trendDirection={metric.trendDirection}
              period={metric.period}
            />
          </MetricCardWrapper>
        ))}
      </CarouselContent>

      <NavigationButton
        onClick={handleScrollRight}
        className="right"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </NavigationButton>
    </CarouselContainer>
  );
};

export default MetricsCarousel;