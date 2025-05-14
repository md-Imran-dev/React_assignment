import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Select,
  MenuItem,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 2),
  borderBottom: '1px solid #eee',
}));

const StatusContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 0),
  flexWrap: 'wrap',
}));

const StatusItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: '0 0 16.666%',
  padding: theme.spacing(0.5),
}));

const StatusIcon = styled(Box)(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: color || theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
  color: 'white',
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  height: '220px',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}));

const COLORS = ['#5e35b1', '#9575cd', '#3949ab', '#5c6bc0', '#43a047', '#e53935'];

const OrderStatusChart = () => {
  const [category, setCategory] = useState('All Categories');
  const [year, setYear] = useState('2023');

  const statusData = [
    { name: 'All', value: 50, icon: 'apps', color: '#5e35b1' },
    { name: 'New', value: 50, icon: 'add_task', color: '#9575cd' },
    { name: 'Pending', value: 50, icon: 'hourglass_bottom', color: '#3949ab' },
    { name: 'Dispatched', value: 50, icon: 'local_shipping', color: '#5c6bc0' },
    { name: 'Delivered', value: 123, icon: 'check_circle', color: '#43a047' },
    { name: 'Cancelled', value: 50, icon: 'cancel', color: '#e53935' }
  ];

  return (
    <Paper elevation={0} sx={{ borderRadius: 1, overflow: 'hidden', backgroundColor: 'red' }}>
      <HeaderContainer>
        <Typography variant="h6" fontWeight="medium">
          Order Status
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            size="small"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              minWidth: 140,
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' }
            }}
          >
            <MenuItem value="All Categories">All Categories</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
          </Select>

          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            displayEmpty
            size="small"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              minWidth: 90,
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' }
            }}
            startAdornment={<CalendarMonthIcon fontSize="small" sx={{ ml: 1, mr: 0.5 }} />}
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </Select>
        </Box>
      </HeaderContainer>

      <ContentContainer>
        <StatusContainer sx={{ width: '65%', flexDirection: 'row', flexWrap: 'wrap', borderRight: '1px solid #eee' }}>
          {statusData.map((status, index) => (
            <StatusItem key={index} sx={{ flex: '0 0 33.333%', borderBottom: index < 3 ? '1px solid #eee' : 'none' }}>
              <StatusIcon color={status.color}>
                <span className="material-icons-outlined" style={{ fontSize: '20px' }}>
                  {status.icon}
                </span>
              </StatusIcon>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                {status.name}
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {status.value}
              </Typography>
            </StatusItem>
          ))}
        </StatusContainer>

        <ChartContainer sx={{ width: '35%' }}>
          <Box sx={{ position: 'relative', width: '180px', height: '180px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                250
              </Typography>
            </Box>
          </Box>
        </ChartContainer>
      </ContentContainer>
    </Paper>
  );
};

export default OrderStatusChart;