import React, { useRef } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MetricCard from './MetricCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CarouselContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

const CarouselContent = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  padding: '8px 0',
});

const NavigationButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  minWidth: 36,
  width: 36,
  height: 36,
  padding: 0,
  borderRadius: '50%',
  backgroundColor: 'white',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

const MetricsCarousel = () => {
  const scrollRef = useRef(null);
  const theme = useTheme();

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
        sx={{ left: 0 }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </NavigationButton>

      <CarouselContent ref={scrollRef}>
        {metrics.map((metric, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              width: { xs: '85%', sm: '45%', md: '22%' },
              maxWidth: 280,
              mr: 2,
            }}
          >
            <MetricCard
              title={metric.title}
              value={metric.value}
              trendValue={metric.trendValue}
              trendDirection={metric.trendDirection}
              period={metric.period}
            />
          </Box>
        ))}
      </CarouselContent>

      <NavigationButton
        onClick={handleScrollRight}
        sx={{ right: 0 }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </NavigationButton>
    </CarouselContainer>
  );
};

export default MetricsCarousel;