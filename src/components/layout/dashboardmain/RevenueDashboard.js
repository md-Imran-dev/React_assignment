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
import { revenueData } from "../../../data/revenueData";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.colors.background.card,
  border: `1px solid ${theme.colors.border.card}`,
  borderRadius: "12px",
  overflow: "hidden",

  "& .MuiToggleButtonGroup-grouped": {
    margin: 0,
    border: 0,
    borderRadius: 0,

    "&.Mui-selected": {
      backgroundColor: theme.colors.background.button,
      color: "inherit",
      fontWeight: 500,
      boxShadow: `0 1px 3px ${theme.colors.Paper}`,
      boxSizing: "border-box",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        borderRadius: "10px",
        border: `1px solid ${theme.colors.border.card}`,
        pointerEvents: "none",
      },
    },

    "&:not(:first-of-type)": {
      borderRadius: 0,
    },
    "&:first-of-type": {
      borderRadius: 0,
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
  const { theme, isDarkMode } = useContext(ThemeContext);
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          borderBottom: `1px solid ${theme.colors.border.card}`,
        }}
      >
        <StyledToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view selector"
          size="small"
          sx={{
            "& .MuiToggleButton-root": {
              fontSize: "12px",
              fontWeight: 400,
            },
          }}
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

        <Box sx={{ display: "flex", gap: 1, paddingBottom: "10px" }}>
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

          <DateButton
            sx={{
              color: isDarkMode ? "white" : "#0E253C",
              fontSize: "12px",
              backgroundColor: theme.colors.background.card,
              border: `1px solid ${theme.colors.border.card}`,
            }}
            endIcon={
              <CalendarMonthIcon
                sx={{
                  color: isDarkMode ? "white" : "#0E253C",
                  fontSize: "12px",
                }}
              />
            }
          >
            Jun 2023
          </DateButton>
        </Box>
      </Box>

      {/* Revenue title and total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          color: theme.colors.text.primary,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="medium"
          sx={{ color: theme.colors.text.primary, fontSize: "18px" }}
        >
          Revenue
        </Typography>
        <Typography variant="subtitle1">
          Total Revenue:{" "}
          <Box
            component="span"
            fontWeight="bold"
            color={theme.colors.text.primary}
          >
            ${"89,235.89"}
          </Box>
        </Typography>
      </Box>

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
                  const { x, y, width, value } = props;
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 10}
                      fill="#666"
                      textAnchor="middle"
                      fontSize={12}
                      color={theme.colors.text.primary}
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
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.colors.text.primary,
            fontSize: "12px",
          }}
        >
          • 2023
        </Typography>
      </Box>
    </Paper>
  );
};

export default RevenueDashboard;
