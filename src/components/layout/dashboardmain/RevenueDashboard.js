import React, { useContext, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ThemeContext from "../../../context/ThemeContext";
import styled from "styled-components";

// Exact data from the screenshot
const revenueData = [
  { name: "Jan", value: 589.12, displayValue: "$589.12" },
  { name: "Feb", value: 840.2, displayValue: "$840.20" },
  { name: "Mar", value: 898.0, displayValue: "$898.00" },
  { name: "Apr", value: 203.0, displayValue: "$203.00" },
  { name: "May", value: 400.01, displayValue: "$400.01" },
  { name: "Jun", value: 920.12, displayValue: "$920.12" },
  { name: "Jul", value: 398.0, displayValue: "$398.00" },
  { name: "Aug", value: 882.0, displayValue: "$882.00" },
  { name: "Sep", value: 390.0, displayValue: "$390.00" },
  { name: "Oct", value: 910.0, displayValue: "$910.00" },
  { name: "Nov", value: 410.12, displayValue: "$410.12" },
  { name: "Dec", value: 840.2, displayValue: "$840.20" },
];

// Styled components
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.colors.background.card,
  border: `1px solid ${theme.colors.border.card}`,
  borderRadius: 20,
  "& .MuiToggleButtonGroup-grouped": {
    margin: 0,
    border: 0,

    "&.Mui-selected": {
      backgroundColor: theme.colors.background.button,
      color: "inherit",
      fontWeight: 500,
      boxShadow: `0 1px 3px ${theme.colors.Paper}`,
      border: `1px solid ${theme.colors.border.card}`,
    },
    "&:not(:first-of-type)": {
      borderRadius: 10,
    },
    "&:first-of-type": {
      borderRadius: 10,
    },
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colors.border.card,
    borderRadius: 8,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colors.border.card,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colors.border.card,
  },
}));

const DateButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  border: "1px solid #e0e0e0",
  color: "inherit",
  textTransform: "none",
  padding: "5px 15px",
  backgroundColor: theme.colors.background.card,
  "&:hover": {
    backgroundColor: theme.colors.background.card,
    borderColor: theme.colors.border.card,
  },
}));

const RevenueDashboard = () => {
  const [view, setView] = useState("revenue");
  const [category, setCategory] = useState("All Categories");
  const { theme } = useContext(ThemeContext);
  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        p: 3,
        border: `1px solid ${theme.colors.border.card}`,
        backgroundColor: theme.colors.background.main,
      }}
    >
      {/* Toggle buttons and filters */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <StyledToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view selector"
          size="small"
        >
          <ToggleButton value="revenue" aria-label="revenue view">
            Revenue
          </ToggleButton>
          <ToggleButton value="orders" aria-label="orders view">
            Orders
          </ToggleButton>
          <ToggleButton value="customers" aria-label="customers view">
            Customers
          </ToggleButton>
        </StyledToggleButtonGroup>

        <Box sx={{ display: "flex", gap: 1 }}>
          <StyledSelect
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            size="small"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="All Categories">All Categories</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
          </StyledSelect>

          <DateButton endIcon={<CalendarMonthIcon />}>Jun 2023</DateButton>
        </Box>
      </Box>

      {/* Revenue title and total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="medium">
          Revenue
        </Typography>
        <Typography variant="subtitle1">
          Total Revenue:{" "}
          <Box component="span" fontWeight="bold" color="#1a237e">
            ${"89,235.89"}
          </Box>
        </Typography>
      </Box>

      {/* Bar chart */}
      <Box sx={{ width: "100%", height: 400, mt: 4 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueData}
            margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
            barSize={40}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e0e0e0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              dy={10}
              tick={{ fill: "#666" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickCount={6}
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              tickFormatter={(value) => `${value.toFixed(2)}`}
              tick={{ fill: "#666" }}
            />
            <Bar
              dataKey="value"
              fill="#5e35b1"
              radius={[4, 4, 0, 0]}
              label={{
                position: "top",
                content: (props) => {
                  const { x, y, width, value, index } = props;
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 10}
                      fill="#666"
                      textAnchor="middle"
                      fontSize={12}
                    >
                      ${value.toFixed(2)}
                    </text>
                  );
                },
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Year indicator */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 0 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center" }}
        >
          • 2023
        </Typography>
      </Box>
    </Paper>
  );
};

export default RevenueDashboard;
